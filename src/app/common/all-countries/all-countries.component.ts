import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
    selector: 'app-all-countries',
    imports: [RouterLink, NgClass],
    templateUrl: './all-countries.component.html',
    standalone: true,
    styleUrls: ['./all-countries.component.scss']
})
export class AllCountriesComponent {

    constructor(
        public router: Router
    ) { }

}