// import { Component, OnInit, OnDestroy  } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
// import { CommonModule } from '@angular/common';

import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DOCUMENT } from '@angular/common';
//import * as AOS from 'aos';
//import 'aos/dist/aos.css';
//import Swiper from 'swiper';
//import 'swiper/css';
//import 'swiper/css/navigation';
//import 'swiper/css/pagination';


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

//   ngAfterViewInit() {
//     new Swiper('.mySwiper', {
//       loop: true,
//       autoplay: {
//         delay: 3000,
//         disableOnInteraction: false
//       },
//       speed: 1000,
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev'
//       }
//     });
 
// }
// }

ngAfterViewInit(): void {
/*  new Swiper('.mySwiper', {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    speed: 1000,
    effect: 'slide',
  });
  */
}
}

