import { Component, OnInit, ElementRef, ViewChild  } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
    selector: 'app-money-calculator',
    imports: [RouterLink, ReactiveFormsModule,CommonModule],
    
    standalone: true,
    templateUrl: './money-calculator.component.html',
    styleUrls: ['./money-calculator.component.scss']
    
})
export class MoneyCalculatorComponent implements OnInit {
    @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

    items = [
      {
        image: 'images/MarBusiness.jpg',
        title: ' Monthly Income Scheme',
        // description: 'Vertex Kalyan Sansthan Non - Government Organization,The Organization is laid by a group of energetic people working with an approach of Integrated development of rural mass. vertex kalyan sansthan Non-Governmental Organization that has been carrying forward its mission since 2002 throughout india.'
      },
      {
        image: 'images/MarBusiness.jpg',
        title: ' Recurring  Deposit',
        // description: 'Vertex Kalyan Sansthan Non - Government Organization,The Organization is laid by a group of energetic people working with an approach of Integrated development of rural mass. '
      },
      {
        image: 'images/MarBusiness.jpg',
        title: ' Saving Account',
      //  description: 'Vertex Kalyan Sansthan Non - Government Organization,The Organization is laid by a group of energetic people working with an approach of Integrated development of rural mass. '
      },
      {
        image: 'images/MarBusiness.jpg',
        title: ' Loans',
      //  description: 'Vertex Kalyan Sansthan Non - Government Organization,The Organization is laid by a group of energetic people working with an approach of Integrated development of rural mass. '
      },
      {
        image: 'images/MarBusiness.jpg',
        title: 'Saving Account',
      // description: 'Vertex Kalyan Sansthan Non - Government Organization,The Organization is laid by a group of energetic people working with an approach of Integrated development of rural mass. '
      },
      {
        image: 'images/MarBusiness.jpg',
        title: 'Saving Account',
      // description: 'Vertex Kalyan Sansthan Non - Government Organization,The Organization is laid by a group of energetic people working with an approach of Integrated development of rural mass. '
      },
      {
        image: 'images/MarBusiness.jpg',
        title: 'Saving Account',
      //  description: 'Vertex Kalyan Sansthan Non - Government Organization,The Organization is laid by a group of energetic people working with an approach of Integrated development of rural mass. '
      },{
        image: 'images/MarBusiness.jpg',
        title: 'Saving Account',
        // description: 'Vertex Kalyan Sansthan Non - Government Organization,The Organization is laid by a group of energetic people working with an approach of Integrated development of rural mass. '
      }
    ];
  
    scrollLeft() {
      this.scrollContainer.nativeElement.scrollBy({ left: -300, behavior: 'smooth' });
    }
  
    scrollRight() {
      this.scrollContainer.nativeElement.scrollBy({ left: 300, behavior: 'smooth' });
    }
  
    removeItem() {
      if (this.items.length > 0) {
        this.items.pop();
      }
    }
  
    constructor(
        public router: Router
    ) { }
    ngOnInit(): void {
        this.emiCalculator = new FormGroup({
            principal: new FormControl('100000', { nonNullable: true, validators: [Validators.required, Validators.min(1)] }),
            rate: new FormControl('7.5', { nonNullable: true, validators: [Validators.required, Validators.min(1.0), Validators.max(30.0)] }),
            time: new FormControl('5', { nonNullable: true, validators: [Validators.required, Validators.min(1),Validators.max(10)] }),
            monthlyEMI: new FormControl({ value: '', disabled: true }, { nonNullable: true }),
            totalInterest: new FormControl({ value: '', disabled: true }, { nonNullable: true }),
            totalAmount: new FormControl({ value: '', disabled: true }, { nonNullable: true })
        });

        const emiDetails = this.calculateEMIDetails(100000, 7.5, 5);
        this.emiCalculator.patchValue({
            monthlyEMI: emiDetails.monthlyEMI,
            totalInterest: emiDetails.totalInterest,
            totalAmount: emiDetails.totalAmount,
            principal: emiDetails.principal
        }, { emitEvent: false });

        this.emiCalculator.valueChanges.subscribe(() => {
            const principal = this.emiCalculator.get('principal')?.value;
            const rate = this.emiCalculator.get('rate')?.value;
            const time = this.emiCalculator.get('time')?.value;

            if (principal && rate && time) {
                const emiDetails = this.calculateEMIDetails(principal, rate, time);
                this.emiCalculator.patchValue({
                    monthlyEMI: emiDetails.monthlyEMI,
                    totalInterest: emiDetails.totalInterest,
                    totalAmount: emiDetails.totalAmount,
                    principal: emiDetails.principal
                }, { emitEvent: false });
            }
        });

    }

    emiCalculator: FormGroup
    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    classApplied2 = false;
    toggleClass2() {
        this.classApplied2 = !this.classApplied2;
    }

    calculateEMIDetails(principal : number, annualRate : number, timeInYears : number) {
        const monthlyRate = annualRate / 12 / 100; // Convert annual rate to monthly (decimal)
        const numberOfMonths = timeInYears * 12;

        // EMI formula
        const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfMonths) /
                    (Math.pow(1 + monthlyRate, numberOfMonths) - 1);

        const totalPayment = emi * numberOfMonths;
        const totalInterest = totalPayment - principal;

        return {
            monthlyEMI: parseFloat(emi.toFixed(2)),
            totalInterest: parseFloat(totalInterest.toFixed(2)),
            totalAmount: parseFloat(totalPayment.toFixed(2)),
            principal: parseFloat(principal.toFixed(2))
        };
        }

}