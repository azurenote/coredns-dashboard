import { Component, Input, OnInit } from '@angular/core';
import { emptyRecord, RecordCNAME } from '../../../models/record.entity';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralErrorStateMatcherService } from '../../../materials/general-error-state-matcher.service';

@Component({
  selector: 'app-record-editor-type-cname',
  templateUrl: './record-editor-type-cname.component.html',
  styleUrls: ['./record-editor-type-cname.component.scss']
})
export class RecordEditorTypeCnameComponent implements OnInit {

  @Input()
  record: RecordCNAME = {
    ...emptyRecord(),
    recordType: 'CNAME',
    content: { host: '' },
  };

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public matcher: GeneralErrorStateMatcherService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      host: ['', [Validators.required]],
      ttl: [3600, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.form.patchValue({
      name: this.record.name,
      host: this.record.content.host,
      ttl: this.record.ttl
    });
  }

}
