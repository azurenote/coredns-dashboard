import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badge-label',
  templateUrl: './badge-label.component.html',
  styleUrls: ['./badge-label.component.scss']
})
export class BadgeLabelComponent {
  @Input()
  value: any;
}
