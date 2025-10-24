import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-why-we-best',
  imports: [CommonModule],
    standalone: true,
    templateUrl: './why-we-best.component.html',
    styleUrls: ['./why-we-best.component.scss']
})
export class WhyWeBestComponent {
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
