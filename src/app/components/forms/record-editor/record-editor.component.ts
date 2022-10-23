import { Component, forwardRef, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Record, RecordEmpty, RecordTypeOptions } from '../../../models';

@Component({
  selector: 'app-record-editor',
  templateUrl: './record-editor.component.html',
  styleUrls: ['./record-editor.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RecordEditorComponent),
      multi: true
    }
  ]
})
export class RecordEditorComponent
  implements OnInit, OnDestroy, ControlValueAccessor {

  public recordTypeOptions = RecordTypeOptions;
  public form: FormGroup;

  private formUpdate$: Subscription;

  /** internal value container */
  private item?: Record;

  propagateChange = (_: any) => {};

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

    this.propagateChange(this.item);
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
  }

  writeValue(obj: any): void {
  }

  setDisabledState?(isDisabled: boolean): void {}

}
