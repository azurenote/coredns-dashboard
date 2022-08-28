import { Component, Input, OnInit } from '@angular/core';
import { Record, emptyRecord } from '../../../models';

@Component({
  selector: 'app-record-editor-type-a',
  templateUrl: './record-editor-type-a.component.html',
  styleUrls: ['./record-editor-type-a.component.scss']
})
export class RecordEditorTypeAComponent implements OnInit {

  @Input()
  record: Record = emptyRecord();

  constructor() { }

  ngOnInit(): void {
  }

}
