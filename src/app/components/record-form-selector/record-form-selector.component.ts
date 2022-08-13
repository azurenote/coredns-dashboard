import { Component, Input, OnInit } from '@angular/core';
import { Record } from '../../models';

@Component({
  selector: 'app-record-form-selector',
  templateUrl: './record-form-selector.component.html',
  styleUrls: ['./record-form-selector.component.scss']
})
export class RecordFormSelectorComponent implements OnInit {

  @Input()
  item?: Record;

  constructor() { }

  ngOnInit(): void {
  }

  save() {

  }

  cancel() {

  }

  delete() {

  }
}
