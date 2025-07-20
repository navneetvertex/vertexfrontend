import { Component } from '@angular/core';
import { WhyWeBestComponent } from '../../common/why-we-best/why-we-best.component';
import { SubscriptionComparisonComponent } from '../../common/subscription-comparison/subscription-comparison.component';
import { AllCountriesComponent } from '../../common/all-countries/all-countries.component';
import { ReviewsComponent } from '../../common/reviews/reviews.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-service-details-page',
    imports: [WhyWeBestComponent, SubscriptionComparisonComponent, AllCountriesComponent, ReviewsComponent, SubscribeComponent],
    standalone: true,
    templateUrl: './service-details-page.component.html',
    styleUrls: ['./service-details-page.component.scss']
})
export class ServiceDetailsPageComponent {}