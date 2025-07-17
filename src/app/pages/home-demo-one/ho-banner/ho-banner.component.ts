import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-ho-banner',
    imports: [RouterLink],
    standalone: true,
    templateUrl: './ho-banner.component.html',
    styleUrls: ['./ho-banner.component.scss']
})
export class HoBannerComponent {}