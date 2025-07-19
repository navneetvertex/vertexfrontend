import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit {
  constructor() { }

  profileFormGroup: FormGroup;
  
  addressFormGroup: FormGroup;
  bankFormGroup: FormGroup;
  ngOnInit(): void {
    this.profileFormGroup = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email_id: new FormControl('', [Validators.required, Validators.email]),
      account_number: new FormControl({value: '', disabled: true}, [Validators.required, Validators.pattern('^[0-9]{9,18}$')]),
      user_id: new FormControl({value: '', disabled: true}, [Validators.required]),
      mobile_number: new FormControl('', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]),
      gender: new FormControl('', [Validators.required]),
      date_of_birth: new FormControl('', [Validators.required]),
      guardian_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      guardian_relation: new FormControl('', [Validators.required]),
      nominee_name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      nominee_relation: new FormControl('', [Validators.required]),
      nominee_contact: new FormControl('', [Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]),
      nominee_email: new FormControl('', [Validators.required,Validators.email]),
      profile_image: new FormControl(''),
      is_divyang: new FormControl(false)
    })
    
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
    this.bankFormGroup = new FormGroup({
      bank_name: new FormControl('', [Validators.required]),
      account_holder: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account_number: new FormControl('', [Validators.required, Validators.pattern('^[0-9]{9,18}$')]),
      ifsc_code: new FormControl('', [Validators.required, Validators.pattern('^[A-Z]{4}[0-9]{7}$')]),
      branch_name: new FormControl('', [Validators.required]),
      account_type: new FormControl('', [Validators.required]),
      micr_code: new FormControl('', [Validators.pattern('^[0-9]{9}$')]),
    });
  }

}
