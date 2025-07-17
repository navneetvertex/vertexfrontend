import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-address',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent implements OnInit {
  // Define any properties or methods needed for the component

  constructor() { }
  addressFormGroup: FormGroup;

  ngOnInit(): void {
     this.addressFormGroup = new FormGroup({
      address_line: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
      district: new FormControl('', [Validators.required]),
      pincode: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')]),
      corr_address_line: new FormControl('', [Validators.required]),
      corr_city: new FormControl('', [Validators.required]),
      corr_state: new FormControl('', [Validators.required]),
      corr_district: new FormControl('', [Validators.required]),
      corr_pincode: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9]{5}$')])
    });
  }
  copyAddress($event: any) {
    if ($event.target.checked) {
      this.addressFormGroup.patchValue({
        corr_address_line: this.addressFormGroup.get('address_line')?.value,
        corr_city: this.addressFormGroup.get('city')?.value,
        corr_state: this.addressFormGroup.get('state')?.value,
        corr_district: this.addressFormGroup.get('district')?.value,
        corr_country: this.addressFormGroup.get('country')?.value,
        corr_pincode: this.addressFormGroup.get('pincode')?.value
      });
    }
  }

}
