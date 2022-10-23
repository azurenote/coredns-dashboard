import { Component, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { RecordEmpty, RecordTypeOptions } from '../../../models/record.entity';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Record } from '../../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-record-editor',
  templateUrl: './record-editor.component.html',
  styleUrls: ['./record-editor.component.scss']
})
export class RecordEditorComponent implements OnInit, OnDestroy {

  @Input()
  item?: Record;

  @Output()
  output?: Record;

  public recordTypeOptions = RecordTypeOptions;
  public form: FormGroup;

  private formUpdate$: Subscription;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      recordType: '',
      content: {}
    });

    this.formUpdate$ = this.form
      .valueChanges.subscribe(data => this.onFormValueChanged(data));
  }

  ngOnInit(): void {
    this.item = {
      recordType: '',
      content: {}
    } as RecordEmpty;
  }

  ngOnDestroy(): void {
    this.formUpdate$.unsubscribe();
  }

  private onFormValueChanged(data: Record) {
    if (!this.item) {
      return;
    }
    this.item.recordType = data.recordType;
  }

}
