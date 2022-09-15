import { Component, Input, OnInit } from '@angular/core';
import { Record, emptyRecord } from '../../../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecordA } from '../../../models/record.entity';
import { GeneralErrorStateMatcherService } from '../../../materials/general-error-state-matcher.service';

@Component({
  selector: 'app-record-editor-type-a',
  templateUrl: './record-editor-type-a.component.html',
  styleUrls: ['./record-editor-type-a.component.scss']
})
export class RecordEditorTypeAComponent implements OnInit {

  @Input()
  record: RecordA = {
    ...emptyRecord(),
    recordType: 'A',
    content: { ip: '' },
  };

  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    public matcher: GeneralErrorStateMatcherService
  ) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      ipv4: ['', [Validators.required]],
      ttl: [3600, [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.form.patchValue({
      name: this.record.name,
      ipv4: this.record.content.ip,
      ttl: this.record.ttl
    });
  }

}
