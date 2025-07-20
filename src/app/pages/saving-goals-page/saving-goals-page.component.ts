import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CalculateComponent } from '../../common/calculate/calculate.component';
import { DigitalBankingComponent } from '../../common/digital-banking/digital-banking.component';
import { CollectingPaymentsComponent } from '../../common/collecting-payments/collecting-payments.component';

@Component({
    selector: 'app-saving-goals-page',
    imports: [RouterLink, CalculateComponent, DigitalBankingComponent, CollectingPaymentsComponent],
    standalone: true,
    templateUrl: './saving-goals-page.component.html',
    styleUrls: ['./saving-goals-page.component.scss']
})
export class SavingGoalsPageComponent {}