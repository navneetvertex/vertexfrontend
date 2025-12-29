import { Component } from '@angular/core';
import { HoBannerComponent } from './ho-banner/ho-banner.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { MoneyCalculatorComponent } from '../../common/money-calculator/money-calculator.component';
import { QuoteComponent } from '../../common/quote/quote.component';
import { TextSliderComponent } from '../../common/text-slider/text-slider.component';
import { BusinessNeedsComponent } from '../../common/business-needs/business-needs.component';
import { SubscriptionComparisonComponent } from '../../common/subscription-comparison/subscription-comparison.component';
import { MissionComponent } from '../../common/mission/mission.component';
import { AllCountriesComponent } from '../../common/all-countries/all-countries.component';
import { ReviewsComponent } from '../../common/reviews/reviews.component';
import { CollectingPaymentsComponent } from '../../common/collecting-payments/collecting-payments.component';
import { DigitalBankingComponent } from '../../common/digital-banking/digital-banking.component';

@Component({
    selector: 'app-home-demo-one',
    standalone: true,
    imports: [HoBannerComponent, FeaturesComponent, PartnersComponent, MoneyCalculatorComponent, QuoteComponent, TextSliderComponent, BusinessNeedsComponent, SubscriptionComparisonComponent, MissionComponent, AllCountriesComponent, ReviewsComponent, CollectingPaymentsComponent, DigitalBankingComponent],
    templateUrl: './home-demo-one.component.html',
    styleUrls: ['./home-demo-one.component.scss']
})
export class HomeDemoOneComponent {}