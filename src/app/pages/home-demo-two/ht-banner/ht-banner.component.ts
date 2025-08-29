// import { Component, OnInit, OnDestroy  } from '@angular/core';
// import { RouterLink } from '@angular/router';
// import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
// import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
    selector: 'app-ht-banner',
    imports: [],
    standalone: true,
    templateUrl: './ht-banner.component.html',
    styleUrls: ['./ht-banner.component.scss']
})

export class HtBannerComponent implements AfterViewInit {
  @ViewChildren('control') controls!: QueryList<ElementRef<HTMLDivElement>>;
  
  // activeSlide = 0;
  // intervalId: any;

  ngAfterViewInit() {
    // this.controls.toArray().forEach((control, idx) => {
    //   control.nativeElement.addEventListener('click', () => {
    //     this.activeSlide = idx;
    //     this.changeSlides();
    //     clearInterval(this.intervalId);
    //     this.intervalId = setInterval(() => this.changeSlides(), 4000);
    //   });
    // });
  }

  // changeSlides() {
  //   console.log('Slide changed to:', this.activeSlide);
  //   // Add actual slide change logic here
  // }
}
 

