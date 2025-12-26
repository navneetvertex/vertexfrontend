import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
    selector: 'app-navbar',
    imports: [CommonModule, RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    standalone: true,
    styleUrls: ['./navbar.component.scss']  
})
export class NavbarComponent implements OnInit {
    isVisible = false; 
    isDrawerOpen = false;
    isMobileDropdownOpen = false;
    isDesktopDropdownOpen = false;
    openDropdown: string | null = null;
    
    // Mobile menu properties
    isMobileMenuOpen = false;
    isServicesDropdownOpen = false;
    isExtrasDropdownOpen = false;
    isProfileDropdownOpen = false;

    toggleDropdown(name: string) {
      this.openDropdown = this.openDropdown === name ? null : name;
    }
    
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
      if (!this.isDrawerOpen) {
        this.isMobileDropdownOpen = false;
      }
    }
  
    toggleMobileDropdown() {
      this.isMobileDropdownOpen = !this.isMobileDropdownOpen;
    }
    
    // Mobile menu methods
    toggleMobileMenu() {
        this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
    
    toggleServicesDropdown() {
        this.isServicesDropdownOpen = !this.isServicesDropdownOpen;
    }
    
    toggleExtrasDropdown() {
        this.isExtrasDropdownOpen = !this.isExtrasDropdownOpen;
    }
    
    toggleProfileDropdown() {
        this.isProfileDropdownOpen = !this.isProfileDropdownOpen;
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

        this.checkIfMobile();
    }
    
    checkIfMobile() {
      if (typeof window !== 'undefined') {
        return window.innerWidth < 768;
      }
      return false;
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
}