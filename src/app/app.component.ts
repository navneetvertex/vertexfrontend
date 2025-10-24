import { NgClass, ViewportScroller } from '@angular/common';
import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet, Event } from '@angular/router';
import { NavbarComponent } from './common/navbar/navbar.component';
import { HeaderTopComponent } from './common/header-top/header-top.component';
import { FooterComponent } from './common/footer/footer.component';
import { BackToTopComponent } from './common/back-to-top/back-to-top.component';
import { LandingComponent } from './common/landing/landing.component';
import AOS from 'aos';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, HeaderTopComponent,NavbarComponent,LandingComponent,FooterComponent, NgClass, BackToTopComponent],
    templateUrl: './app.component.html',
    standalone: true,
    styleUrl: './app.component.scss',
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {

    title = 'Vertex';

    constructor(
        public router: Router,
        private viewportScroller: ViewportScroller
    ) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                // Scroll to the top after each navigation end
                this.viewportScroller.scrollToPosition([0, 0]);
            }
        });
    }
    ngOnInit() {
        AOS.init({
          duration: 1000,
          easing: 'ease-in-out',
          once: true
        });
      }
    
}