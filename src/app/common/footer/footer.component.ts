import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-footer',
    imports: [RouterLink],
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


    center = { lat: 28.6139, lng: 77.2090 }; // Example: Delhi
    zoom = 15;  
}