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
 
  private currentSlide = 0;
  private totalSlides = 2;
  private autoSlideInterval: any;

  constructor(private ngZone: NgZone) {}

  ngOnInit(): void {
    myCustomFunction();
    this.startAutoSlide();
    
    // Make functions globally available
    (window as any).previousSlide = this.previousSlide.bind(this);
    (window as any).nextSlide = this.nextSlide.bind(this);
    (window as any).goToSlide = this.goToSlide.bind(this);
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  previousSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.totalSlides - 1 : this.currentSlide - 1;
    this.updateSlider();
    this.resetAutoSlide();
  }

  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.updateSlider();
    this.resetAutoSlide();
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.updateSlider();
    this.resetAutoSlide();
  }

  private updateSlider(): void {
    const slider = document.getElementById('eventsSlider');
    const indicators = document.querySelectorAll('.slide-indicator');
    
    if (slider) {
      slider.style.transform = `translateX(-${this.currentSlide * 100}%)`;
    }
    
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === this.currentSlide);
    });
  }

  private resetAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    this.startAutoSlide();
  }
}