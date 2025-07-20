import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-business-needs',
    imports: [NgClass],
    standalone: true,
    templateUrl: './business-needs.component.html',
    styleUrls: ['./business-needs.component.scss']
})
export class BusinessNeedsComponent {

    constructor(
        public router: Router
    ) { }

}