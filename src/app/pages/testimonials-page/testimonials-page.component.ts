import { Component } from '@angular/core';
import { QuoteComponent } from '../../common/quote/quote.component';
import { CollectingPaymentsComponent } from '../../common/collecting-payments/collecting-payments.component';

@Component({
    selector: 'app-testimonials-page',
    imports: [QuoteComponent, CollectingPaymentsComponent],
    standalone: true,
    templateUrl: './testimonials-page.component.html',
    styleUrls: ['./testimonials-page.component.scss']
})
export class TestimonialsPageComponent {}