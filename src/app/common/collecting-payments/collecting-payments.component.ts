import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-collecting-payments',
    imports: [],
    standalone: true,
    templateUrl: './collecting-payments.component.html',
    styleUrls: ['./collecting-payments.component.scss']
})
export class CollectingPaymentsComponent {

    constructor(
        public router: Router
    ) { }

}