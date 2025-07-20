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
      name: 'Pandav Nagar, East Delhi',
      address: ' Plot no - 53, 3rd floor, Main road,PIN code - 110092',
      phone: '+91-9319208666',
      open: false
    },
  
    {
      name: 'Pandav Nagar, East Delhi',
      address: ' Plot no - 53, 3rd floor, Main road,PIN code - 110092',
      phone: '+91-9319208666',
      open: false
    },
    {
      name: 'Pandav Nagar, East Delhi',
      address: ' Plot no - 53, 3rd floor, Main road,PIN code - 110092',
      phone: '+91-9319208666',
      open: false
    },
    
    // Add more branches as needed...
  ];
 

}
