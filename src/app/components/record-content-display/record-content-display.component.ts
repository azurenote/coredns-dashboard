import { Component, Input } from '@angular/core';
import { Record } from '../../models';

@Component({
  selector: 'app-record-content-display',
  templateUrl: './record-content-display.component.html',
  styleUrls: ['./record-content-display.component.scss']
})
export class RecordContentDisplayComponent {

  @Input()
  record: Record = {
    zone: '',
    name: '',
    recordType: '',
    ttl: 0,
    content: {},
  };

  constructor() { }

}
