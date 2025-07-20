import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UtilsService } from '../../core/services/utils.service';
import { AuthService } from '../../core/services/auth.service';
import { first } from 'rxjs';

@Component({
    selector: 'app-register-page',
    imports: [RouterLink, ReactiveFormsModule, CommonModule],
    standalone: true,
    templateUrl: './register-page.component.html',
    styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {


    constructor(private toast: ToastrService,
        private authService: AuthService,
        private router: Router,
        private utilService: UtilsService
     ) {}

    registerFormGroup: FormGroup;
    errorMessages : string = '';
    selectedDate: string | Date;
    today: Date = new Date();
    maxDate: string;

    ngOnInit(): void {
        this.maxDate = this.today.toISOString().split('T')[0];
        console.log('RegisterPageComponent initialized');
        this.registerFormGroup = new FormGroup({
            name: new FormControl('', [Validators.required, Validators.minLength(2)]),
            email_id: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
            (control) => {
                const value = control.value || '';
                const strengthChecks = {
                length: value.length >= 8,
                uppercase: /[A-Z]/.test(value),
                lowercase: /[a-z]/.test(value),
                number: /[0-9]/.test(value),
                special: /[!@#$%^&*(),.?":{}|<>]/.test(value)
                };
                const failedChecks = Object.entries(strengthChecks)
                .filter(([_, passed]) => !passed)
                .map(([key]) => key);
                return failedChecks.length
                ? { passwordStrength: `Password must include: ${failedChecks.join(', ')}` }
                : null;
            }
            ]),
            confirm_password: new FormControl('', [Validators.required]),
            guardian_name: new FormControl('', [Validators.required]),
            date_of_birth: new FormControl('', [Validators.required]),
            area: new FormControl('', [Validators.required]),
            district: new FormControl('', [Validators.required]),
            pin_code: new FormControl('', [Validators.required, Validators.pattern(/^\d{6}$/)]),
            terms_accepted: new FormControl(true, [Validators.requiredTrue]),
            gender: new FormControl('', [Validators.required]),
            mobile_number: new FormControl('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
            payment_method: new FormControl('', [Validators.required]),
            pin: new FormControl(),
            aadhar_number: new FormControl('', [
            Validators.required,
            Validators.pattern(/^\d{12}$/)
            ]),
        }, (group: AbstractControl) => {
            const password = group.get('password')?.value;
            const confirmPassword = group.get('confirm_password')?.value;
            return password === confirmPassword ? null : { passwordMismatch: true };
        });

        this.registerFormGroup.get('payment_method')?.valueChanges.subscribe((method) => {
            const pinControl = this.registerFormGroup.get('pin');
            if (method === 'cash') {
                pinControl?.setValidators([Validators.required]);
            } else {
                pinControl?.clearValidators();
            }
            pinControl?.updateValueAndValidity();
        });
    }

    onSubmit() {
        this.errorMessages = '';
        if (this.registerFormGroup.valid) {
            const formValue = this.registerFormGroup.value;

            const dob = new Date(formValue.date_of_birth);
            const today = new Date();
            const age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();
            const is18OrOlder = age > 18 || (age === 18 && m >= 0 && today.getDate() >= dob.getDate());

            if (!is18OrOlder) {
                this.registerFormGroup.get('date_of_birth')?.setErrors({ underage: true });
                return;
            }

            // this.authService.register(formValue)
            //     .pipe(first())
            //     .subscribe(
            //         data => {
            //             this.toast.success(data?.message, 'Success');
            //             this.router.navigate(['/']);
            //         },
            //         error => {
            //             this.errorMessages = error ? error.error.message : '';
            //         });


            console.log('Registration successful', this.registerFormGroup.value);
            // Handle successful registration logic here
        } else {
            // Handle form errors
            console.log('Form is invalid', this.registerFormGroup.errors);
            this.registerFormGroup.markAllAsTouched();
        }
    }

    pincodechecker(event: any) {
        this.utilService.validate_pincode(event).subscribe({
            next: (response: any) => {
                console.log('Pincode validation response:', response);
                if (response && response.status === 'success') {
                    this.registerFormGroup.patchValue({district: response?.data?.pin?.district});
                } else {
                    this.errorMessages = 'Invalid Pincode';
                    this.registerFormGroup.get('pin_code')?.setErrors({ invalidPincode: true });
                }
            }
            ,
            error: (error) => {
                this.errorMessages = 'Error checking pincode';
                this.toast.error(this.errorMessages, 'Error');
                console.error('Error checking pincode:', error);
            }
        });
    }
}
