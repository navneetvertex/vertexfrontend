import { Component } from '@angular/core';
import { SubscriptionComparisonComponent } from '../../common/subscription-comparison/subscription-comparison.component';
import { PricingFeaturesComponent } from '../../common/pricing-features/pricing-features.component';

@Component({
    selector: 'app-pricing-page',
    imports: [SubscriptionComparisonComponent, PricingFeaturesComponent],
    templateUrl: './pricing-page.component.html',
    styleUrls: ['./pricing-page.component.scss']
})
export class PricingPageComponent {}