import { Component } from '@angular/core';
import { HtBannerComponent } from './ht-banner/ht-banner.component';
import { WhyWeBestComponent } from '../../common/why-we-best/why-we-best.component';
import { QuoteComponent } from '../../common/quote/quote.component';
import { PaymentsTransfersComponent } from '../../common/payments-transfers/payments-transfers.component';
import { MoneyCalculatorComponent } from '../../common/money-calculator/money-calculator.component';
import { SubscriptionComparisonComponent } from '../../common/subscription-comparison/subscription-comparison.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { ReviewsComponent } from '../../common/reviews/reviews.component';
import { PaymentsEvolutionComponent } from '../../common/payments-evolution/payments-evolution.component';
import { AllCountriesComponent } from '../../common/all-countries/all-countries.component';
import { OnlinePaymentComponent } from '../../common/online-payment/online-payment.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';
import { TextSliderComponent } from '../../common/text-slider/text-slider.component';

@Component({
    selector: 'app-home-demo-two',
    standalone: true,
    imports: [HtBannerComponent, WhyWeBestComponent, QuoteComponent, TextSliderComponent, PaymentsTransfersComponent, MoneyCalculatorComponent,  ReviewsComponent, PaymentsEvolutionComponent,  OnlinePaymentComponent, SubscribeComponent],
    templateUrl: './home-demo-two.component.html',
    styleUrls: ['./home-demo-two.component.scss']
})
export class HomeDemoTwoComponent {}
