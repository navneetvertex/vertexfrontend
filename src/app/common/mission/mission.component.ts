import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-mission',
    imports: [RouterLink],
    standalone: true,
    templateUrl: './mission.component.html',
    styleUrls: ['./mission.component.scss']
})
export class MissionComponent {}