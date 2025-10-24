import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-quote',
    imports: [ RouterLink,CommonModule],
    standalone: true,
    templateUrl: './quote.component.html',
    styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
    features = [
        {
          title: 'Why Choose Us?',
          description: 'vertex kalyan cooperative society have developed an excellent reputation with taking care of the financial needs for a wide variety of businesses and individuals. If you need assistance with financial management, you can count on us for professional service. We have a wealth of information and are looking forward to serve you.'
        },
        {
          title: 'What Sets Us Apart',
          description: 'vertex kalyan cooperative society have developed an excellent reputation with taking care of the financial needs for a wide variety of businesses and individuals. If you need assistance with financial management, you can count on us for professional service. We have a wealth of information and are looking forward to serve you.'
        },
        {
          title: 'The Co-operative Advantage',
          description: 'vertex kalyan cooperative society have developed an excellent reputation with taking care of the financial needs for a wide variety of businesses and individuals. If you need assistance with financial management, you can count on us for professional service. We have a wealth of information and are looking forward to serve you.'
        },
        {
          title: 'Built on Trust',
           description: 'vertex kalyan cooperative society have developed an excellent reputation with taking care of the financial needs for a wide variety of businesses and individuals. If you need assistance with financial management, you can count on us for professional service. We have a wealth of information and are looking forward to serve you.'
        }
      ];
    }