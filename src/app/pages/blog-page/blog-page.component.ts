import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-blog-page',
    imports: [RouterLink],
    standalone: true,
    templateUrl: './blog-page.component.html',
    styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent {}