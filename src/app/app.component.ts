import { Component } from '@angular/core';
import {
  fadeToLeftAnimation,
  fadeToRightAnimation,
  fadeToUpAnimation,
} from './animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [fadeToLeftAnimation, fadeToRightAnimation, fadeToUpAnimation],
})
export class AppComponent {
  title = 'ticket';
}
