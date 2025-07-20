import { Component } from '@angular/core';
import { SubscriptionComparisonComponent } from '../../common/subscription-comparison/subscription-comparison.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { MoneyCalculatorComponent } from '../../common/money-calculator/money-calculator.component';

@Component({
    selector: 'app-send-money-page',
    standalone: true,
    imports: [MoneyCalculatorComponent, SubscriptionComparisonComponent],
    templateUrl: './send-money-page.component.html',
    styleUrls: ['./send-money-page.component.scss']
})
export class SendMoneyPageComponent {}