import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BusinessNeedsComponent } from '../../common/business-needs/business-needs.component';
import { OurCommitmentComponent } from '../../common/our-commitment/our-commitment.component';
import { TeamComponent } from '../../common/team/team.component';
import { PartnersComponent } from '../../common/partners/partners.component';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
    selector: 'app-about-page',
    standalone: true,
    imports: [RouterModule, BusinessNeedsComponent, OurCommitmentComponent, TeamComponent, PartnersComponent, SubscribeComponent],
    templateUrl: './about-page.component.html',
    styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent {}