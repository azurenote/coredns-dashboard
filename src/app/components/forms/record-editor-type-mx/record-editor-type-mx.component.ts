import { Component, Input, OnInit } from '@angular/core';
import { emptyRecord } from '../../../models';
import { RecordMX } from '../../../models/record.entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralErrorStateMatcherService } from '../../../materials/general-error-state-matcher.service';

@Component({
  selector: 'app-record-editor-type-mx',
  templateUrl: './record-editor-type-mx.component.html',
  styleUrls: ['./record-editor-type-mx.component.scss']
})
export class RecordEditorTypeMxComponent implements OnInit {

  @Input()
  record: RecordMX = {
    ...emptyRecord(),
    recordType: 'MX',
    content: {
      host: '',
      priority: 0
    }
  }

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public matcher: GeneralErrorStateMatcherService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      host: ['', [Validators.required]],
      priority: [10, [Validators.required]],
      ttl: [3600, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.form.patchValue({
      name: this.record.name,
      host: this.record.content.host,
      priority: this.record.content.priority,
      ttl: this.record.ttl
    });
  }

}
