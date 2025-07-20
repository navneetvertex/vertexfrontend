import { Component } from '@angular/core';
import { SubscribeComponent } from '../../common/subscribe/subscribe.component';

@Component({
  selector: 'app-gallery',
  imports: [SubscribeComponent],
  standalone: true,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {

}
