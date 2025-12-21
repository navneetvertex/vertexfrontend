import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
declare var myCustomFunction: any;
export interface SliderItem {
  img: string;
  alt: string;
  text: string;
}
@Component({
    selector: 'app-money-calculator',
    imports: [ReactiveFormsModule,CommonModule],
    
    standalone: true,
    templateUrl: './money-calculator.component.html',
    styleUrls: ['./money-calculator.component.scss']
    
})
export class MoneyCalculatorComponent implements OnInit {
 
  // private intervalId: any;
  // private currentIndex = 1;
  // private totalSlides = 5; // total number of slides (s1..s5)


  // constructor(private ngZone: NgZone) {}

  // ngAfterViewInit(): void {
  //   this.startAutoSlide();
  // }
  // startAutoSlide(): void {
  //   this.intervalId = setInterval(() => {
  //     this.ngZone.run(() => {
  //       this.currentIndex = (this.currentIndex % this.totalSlides) + 1;
  //       const radio = document.getElementById(`s${this.currentIndex}`) as HTMLInputElement;
  //       if (radio) {
  //         radio.checked = true;
  //       }
  //     });
  //   }, 3000); // 3 seconds per slide
  // }
    // constructor(
    //     public router: Router
    // ) { }
   
    ngOnInit(): void {
      // if (this.intervalId) {
      //   clearInterval(this.intervalId);
      // }
      myCustomFunction();
    }

   
// 

}