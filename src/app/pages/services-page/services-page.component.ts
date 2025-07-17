import { Component } from '@angular/core';
import { ServicesComponent } from '../../common/services/services.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
    selector: 'app-services-page',
    imports: [ServicesComponent, SubscribeComponent, CommonModule],
    standalone: true,
    templateUrl: './services-page.component.html',
    styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent {
    constructor(public router: Router) {}
}