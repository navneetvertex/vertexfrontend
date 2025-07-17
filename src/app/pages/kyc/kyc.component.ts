import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UsersService } from '../../core/services/users.service';
import { AuthService } from '../../core/services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-kyc',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './kyc.component.html',
  styleUrl: './kyc.component.scss'
})
export class KycComponent implements OnInit {

  constructor(private userService: UsersService, 
    private authService: AuthService
  ) { }

  kycFormGroup: FormGroup;
  ngOnInit(): void {
    this.getUserById();
    this.kycFormGroup = new FormGroup({
        aadhar : new FormControl('', [Validators.required, Validators.pattern('^[0-9]{12}$')]),
        pan : new FormControl('' , [Validators.required, Validators.pattern('^[A-Z]{5}[0-9]{4}[A-Z]{1}$')]),
        pan_image : new FormControl('', Validators.required, ),
        aadhar_front : new FormControl('' , Validators.required),
        aadhar_back : new FormControl('', Validators.required),
        user: new FormControl('', Validators.required)
    });
  }

  getUserById() {
    this.userService.getUserById().subscribe({
      next: (data: any) => {
        const user_details = data.data.user.kyc;
        console.log('User data fetched successfully:', user_details);
        this.kycFormGroup.patchValue({
          aadhar: user_details.aadhar,
          pan: user_details.pan,
          // pan_image: user_details.pan_image,
          // aadhar_front: user_details.aadhar_front,
          // aadhar_back: user_details.aadhar_back,
          user: user_details.user
        });
      },
      error: (error) => {
        console.error('Error fetching user data:');
      }
    });
  }

  onFileSelected(event: Event, controlName: string) {
    const input = event.target as HTMLInputElement;
    if (!input.files || input.files.length === 0) return;

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = (e: any) => {
      let base64String = e.target.result as string;

      const base64Length = base64String.length - (base64String.indexOf(',') + 1);
      const sizeInBytes = 4 * Math.ceil(base64Length / 3) * 0.5624896334383812; // base64 to bytes

      if (sizeInBytes > 1024 * 1024 && file.type.startsWith('image/')) {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          const maxSize = 1024; 

          if (width > height && width > maxSize) {
            height = Math.round((height *= maxSize / width));
            width = maxSize;
          } else if (height > maxSize) {
            width = Math.round((width *= maxSize / height));
            height = maxSize;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx?.drawImage(img, 0, 0, width, height);

          let quality = 0.9;
          let compressedBase64 = '';
          do {
            compressedBase64 = canvas.toDataURL(file.type, quality);
            const compressedLength = compressedBase64.length - (compressedBase64.indexOf(',') + 1);
            const compressedSize = 4 * Math.ceil(compressedLength / 3) * 0.5624896334383812;
            if (compressedSize <= 1024 * 1024 || quality < 0.5) break;
            quality -= 0.1;
          } while (quality > 0.4);

          this.kycFormGroup.get(controlName)?.setValue(compressedBase64);
        };
      } else {
        this.kycFormGroup.get(controlName)?.setValue(base64String);
      }
    };

    reader.readAsDataURL(file);
  }

  submitKyc() {
    if (this.kycFormGroup.valid) {
      const payload = this.kycFormGroup.value;
      console.log('Submitting KYC with payload:', payload);
      this.userService.upsertKyc(payload).subscribe({
        next: (data: any) => {
          console.log('KYC updated successfully:', data);
        },
        error: (error : any) => {
          console.error('Error updating KYC:', error);
        }
      });
    } else {
      this.kycFormGroup.markAllAsTouched();
      console.error('Form is invalid');
    }
  }
}
