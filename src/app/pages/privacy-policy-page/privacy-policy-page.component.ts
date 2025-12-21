import { Component } from '@angular/core';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-privacy-policy-page',
    imports: [SubscribeComponent],
    standalone: true,
    templateUrl: './privacy-policy-page.component.html',
    styleUrls: ['./privacy-policy-page.component.scss']
    
})

export class PrivacyPolicyPageComponent {
    siteName = 'Vertex Kalyan Cooperative (U) Thrift & Credit Society Ltd.';
  footerText = '@ All rights reserved | Vertex Kalyan Cooperative Society';
  email = 'care@vertexsociety.com';
}