import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, NgClass, RouterLinkActive, CommonModule],
    templateUrl: './navbar.component.html',
    standalone: true,
    styleUrls: ['./navbar.component.scss']  
})
export class NavbarComponent implements OnInit {
    isDrawerOpen: boolean = false;

    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    }
    
    closeDrawer() {
      this.isDrawerOpen = false;
    }
    constructor(
        public router: Router,
        private authService: AuthService
    ) { }

    isLoggedIn: boolean = false;
    userName: string = '';

    ngOnInit(): void {
        this.authService.currentUser.subscribe((user: any) => {
            if (user) {
                this.isLoggedIn = true;
                this.userName = user?.user?.name??'';
            } else {
                this.isLoggedIn = false;
                this.userName = '';
            }
        });
    }

    logout() {
        this.authService.logout()
    }

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    sidebarClassApplied = false;
    sidebarToggleClass() {
        this.sidebarClassApplied = !this.sidebarClassApplied;
    }

    // Navbar Sticky
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 50) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }
    // new code
    

}