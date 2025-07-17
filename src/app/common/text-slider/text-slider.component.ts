import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-text-slider',
    imports: [CarouselModule],
    standalone: true,
    templateUrl: './text-slider.component.html',
    styleUrls: ['./text-slider.component.scss']
})
export class TextSliderComponent {

    textSliderSlides: OwlOptions = {
    nav: false,
    margin: 35,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 1000, // Set delay between auto transitions
    autoplaySpeed: 3000,   // Duration of slide transition
    autoplayHoverPause: false,
    slideTransition: 'linear',
    responsive: {
        0: {
            margin: 15,
            items: 1
        },
        576: {
            margin: 15,
            items: 1
        },
        768: {
            margin: 25,
            items: 2
        },
        992: {
            items: 2
        },
        1200: {
            items: 2
        },
        1400: {
            items: 3
        },
        1700: {
            items: 4
        }
    }
};

}