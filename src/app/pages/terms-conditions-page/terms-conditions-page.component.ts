import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-terms-conditions-page',
    imports: [RouterLink, SubscribeComponent],
    standalone: true,
    templateUrl: './terms-conditions-page.component.html',
    styleUrls: ['./terms-conditions-page.component.scss']
})
export class TermsConditionsPageComponent {}