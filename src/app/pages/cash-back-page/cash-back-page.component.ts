import { Component } from '@angular/core';
import { LifetimeRewardsComponent } from '../../common/lifetime-rewards/lifetime-rewards.component';
import { CashbackSavingsComponent } from '../../common/cashback-savings/cashback-savings.component';
import { RetailersComponent } from '../../common/retailers/retailers.component';

@Component({
    selector: 'app-cash-back-page',
    imports: [LifetimeRewardsComponent, CashbackSavingsComponent, RetailersComponent],
    standalone: true,
    templateUrl: './cash-back-page.component.html',
    styleUrls: ['./cash-back-page.component.scss']
})
export class CashBackPageComponent {}