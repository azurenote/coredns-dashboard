import { Component, forwardRef, OnInit } from '@angular/core';
import {
  ControlValueAccessor, FormBuilder, FormGroup,
  NG_VALUE_ACCESSOR, Validators
} from '@angular/forms';
import { Subscription } from 'rxjs';

import { Record, emptyRecord, RecordA } from '../../../models';
import { GeneralErrorStateMatcherService } from '../../../materials/general-error-state-matcher.service';


@Component({
  selector: 'app-record-editor-type-a',
  templateUrl: './record-editor-type-a.component.html',
  styleUrls: ['./record-editor-type-a.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RecordEditorTypeAComponent),
      multi: true
    }
  ]
})
export class RecordEditorTypeAComponent
  implements OnInit, ControlValueAccessor {

  private record: RecordA = {
    ...emptyRecord(),
    recordType: 'A',
    content: { ip: '' },
  };

  form: FormGroup;
  propagateChange = (_: any) => {};
  private formUpdate$: Subscription;

  constructor(
    private fb: FormBuilder,
    public matcher: GeneralErrorStateMatcherService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      ipv4: ['', [Validators.required]],
      ttl: [3600, [Validators.required]]
    });

    this.formUpdate$ = this.form
      .valueChanges.subscribe(data => this.onFormValueChanged(data));
  }

  ngOnInit(): void {
    this.form.patchValue({
      name: this.record.name,
      ipv4: this.record.content.ip,
      ttl: this.record.ttl
    });
  }

  writeValue(record: RecordA): void {
    this.record = {
      ...record
    };
    const { name, ttl, content } = record;

    this.form.patchValue({
      name,
      ipv4: content.ip,
      ttl
    });
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }

  private onFormValueChanged(data: { name: string, ipv4: string, ttl: number }) {
    const { name, ttl, ipv4 } = data;

    this.record.name = name;
    this.record.ttl = ttl;
    this.record.content.ip = ipv4

    this.propagateChange(this.record);
  }

}
