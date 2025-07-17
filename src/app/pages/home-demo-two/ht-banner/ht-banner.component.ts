import { Component, OnInit, OnDestroy  } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
declare var myCustomFunction: any;
export interface SliderItem {
    img: string;
    alt: string;
    text: string;
  }
@Component({
    selector: 'app-ht-banner',
    imports: [CarouselModule,CommonModule],
    standalone: true,
    templateUrl: './ht-banner.component.html',
    styleUrls: ['./ht-banner.component.scss']
})
export class HtBannerComponent implements OnInit{

    currentSlideIndex = 0;
    // bannerSlider: OwlOptions = {
    //     loop: true,
    //     margin: 0,
    //     nav: true,
    //     dots: true,
    //     autoplay: true,
    //     autoplayTimeout: 10000,
    //     autoplayHoverPause: true,
    //     responsive: {
    //         0: {
    //             items: 1,
    //             stagePadding: 0
    //         },
    //         600: {
    //             items: 1,
    //             stagePadding: 0
    //         },
    //         1000: {
    //             items: 1,
    //             stagePadding: 0
    //         }
    //     },
    //     navText: ['<', '>'],
    //     autoWidth: true,
    //     autoHeight: true
    // }
//    slider
ngOnInit(): void {
    this.myCustomFunction();  // ✅ use `this.` to call it
  }

  myCustomFunction(): void {
    console.log("Function is working!");
    // your logic here
  }
slides = [
    {
      image: 'images/slidee_1.jpg',
      // title: 'Slide 1 Title',
      // description: 'Slide 1 Description',
      link: ''  // ✅ added
    },
    {
      image: 'images/slider_2.jpg',
      // title: 'Slide 2 Title',
      // description: 'Slide 2 Description',
      link: ''    // ✅ added
    },
    {
        image: 'images/slider_3.jpg',
        // title: 'Slide 2 Title',
        // description: 'Slide 2 Description',
        link: ''    // ✅ added
      },
      {
        image: 'images/slider_4.jpg',
        // title: 'Slide 2 Title',
        // description: 'Slide 2 Description',
        link: ''    // ✅ added
      },
  
  ];

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlideIndex = (this.currentSlideIndex - 1 + this.slides.length) % this.slides.length;
  }
}


