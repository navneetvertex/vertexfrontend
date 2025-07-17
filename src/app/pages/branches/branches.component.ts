import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-branches',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './branches.component.html',
  styleUrl: './branches.component.scss'
})
export class BranchesComponent {

  branches = [
    {
      name: 'Noida Sector 62',
      address: 'IT Park Road, Tower B, Sector 62, Noida, UP-201301',
      phone: '9654060232',
      open: false
    },
  
    {
      name: 'Noida Sector 62',
      address: 'IT Park Road, Tower B, Sector 62, Noida, UP-201301',
      phone: '9876543210',
      open: false
    },
    {
      name: 'Noida Sector 62',
      address: 'IT Park Road, Tower B, Sector 62, Noida, UP-201301',
      phone: '9990011223',
      open: false
    },
    
    // Add more branches as needed...
  ];
 

}
