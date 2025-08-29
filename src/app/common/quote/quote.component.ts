import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-quote',
    imports: [ RouterLink,CommonModule],
    standalone: true,
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
    schemes: string[] = [
        'Member Ship',
        'Loan Scheme',
        'Deposit Scheme',
        'SHG Scheme',
        'Livelihood Scheme'
      ];
    constructor(
        public router: Router
    ) { }
  
    
}