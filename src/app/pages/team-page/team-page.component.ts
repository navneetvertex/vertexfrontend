import { Component } from '@angular/core';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-team-page',
    imports: [SubscribeComponent],
    standalone: true,
    templateUrl: './team-page.component.html',
    styleUrls: ['./team-page.component.scss']
})
export class TeamPageComponent {}