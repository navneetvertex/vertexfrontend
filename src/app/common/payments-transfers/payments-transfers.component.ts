import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-payments-transfers',
    imports: [CommonModule],
    standalone: true,
    templateUrl: './payments-transfers.component.html',
    styleUrls: ['./payments-transfers.component.scss']
})
export class PaymentsTransfersComponent {
  features = [
    {
      title: 'vertexsociety',
      description: 'vertex kalyan cooperative society have developed an excellent reputation with taking care of the financial needs for a wide variety of businesses and individuals. If you need assistance with financial management, you can count on us for professional service. We have a wealth of information and are looking forward to serve you.',
      image: '/images/product_img.jpg'
    },
    {
      title: 'vertexsociety',
      description: 'vertex kalyan cooperative society have developed an excellent reputation with taking care of the financial needs for a wide variety of businesses and individuals. If you need assistance with financial management, you can count on us for professional service. We have a wealth of information and are looking forward to serve you.',
      image: '/images/mmbership.jpg'
    },
    {
      title: 'vertexsociety',
      description: 'vertex kalyan cooperative society have developed an excellent reputation with taking care of the financial needs for a wide variety of businesses and individuals. If you need assistance with financial management, you can count on us for professional service. We have a wealth of information and are looking forward to serve you.',
      image: '/images/specialoffer.jpg'
    },
    // ... add more items
  ];
  
    }
    

