import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bank',
  imports: [ReactiveFormsModule, CommonModule],
  standalone: true,
  templateUrl: './bank.component.html',
  styleUrl: './bank.component.scss'
})
export class BankComponent implements OnInit {

  constructor() { }

  bankFormGroup: FormGroup;

  ngOnInit(): void {
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

  // Add any additional methods or properties as needed

}
