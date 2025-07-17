import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing',
  imports: [CommonModule], 
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  isVisible = true;
  
  ngOnInit(): void {
    // Show popup on page load
    this.isVisible = true;
  }
  closePopup() {
    this.isVisible = false;
    document.body.classList.remove('overflow-hidden');
  }
  // 
  openPopup() {
    this.isVisible = true;
    document.body.classList.add('overflow-hidden');
  }
  
 






  
}
