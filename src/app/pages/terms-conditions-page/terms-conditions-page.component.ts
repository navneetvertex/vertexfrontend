import { Component } from '@angular/core';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-terms-conditions-page',
    imports: [SubscribeComponent],
    standalone: true,
    templateUrl: './terms-conditions-page.component.html',
    styleUrls: ['./terms-conditions-page.component.scss']
})
export class TermsConditionsPageComponent {}