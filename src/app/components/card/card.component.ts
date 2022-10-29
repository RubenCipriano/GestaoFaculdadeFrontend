import { Component, Input } from "@angular/core";

@Component({
  selector: 'card-component',
  styleUrls: ['card.component.scss'],
  templateUrl: 'card.component.html'
})

export class CardComponent {
  @Input() centerImage?: string | null;
}
