// import { Component, OnInit, OnDestroy  } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
// import { CommonModule } from '@angular/common';

import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import { SwiperModule } from 'swiper/angular';

// declare function myCustomFunction(): void;

@Component({
    selector: 'app-ht-banner',
    imports: [],  
    standalone: true,
    templateUrl: './ht-banner.component.html',
    styleUrls: ['./ht-banner.component.scss'],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class HtBannerComponent implements AfterViewInit {
  @ViewChildren('control') controls!: QueryList<ElementRef<HTMLDivElement>>;
  
  // activeSlide = 0;
  // intervalId: any;
  currentIndex = 0;
  ngAfterViewInit() {
    new Swiper('.mySwiper', {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false
      },
      speed: 1000,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
 // Define your custom function here

      // items: [
      //   { image: 'images/FD.jpg', text: 'Item 1' },
      //   { image: 'images/Franchise2.jpg', text: 'Item 2' },
      //   { image: 'images/FD.jpg', text: 'Item 3' },
      //   { image: 'images/hand-shake.jpg', text: 'Item 4' },
      //   { image: 'images/img5.jpg', text: 'Item 5' },
      //   { image: 'images/hand-shake.jpg', text: 'Item 6' },
      // ]
  
  // ngAfterViewInit() {
    // this.controls.toArray().forEach((control, idx) => {
    //   control.nativeElement.addEventListener('click', () => {
    //     this.activeSlide = idx;
    //     this.changeSlides();
    //     clearInterval(this.intervalId);
    //     this.intervalId = setInterval(() => this.changeSlides(), 4000);
    //   });
    // });
  // }

  // changeSlides() {
  //   console.log('Slide changed to:', this.activeSlide);
  //   // Add actual slide change logic here
  // }
  // ngOnInit() {
  //   this.myCustomFunction("Hello Mukesh from TS!");
  // }

  // myCustomFunction(msg: string) {
  //   console.log("TS Function:", msg);
  // }
  // ngOnInit(): void {
 
    //  myCustomFunction();

    //   AOS.init({
    //     duration: 1200,   // Animation duration
    //     easing: 'ease-out-cubic', 
    //     once: true,       // Run only once
    //   });
    // }
  // }
}
}

 

