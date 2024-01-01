import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  url: string = 'www.tazkty.com/473847';

  constructor(private cb: ClipboardService) {}

  ngOnInit(): void {}

  copy() {
    this.cb.copy(this.url);
  }
}
