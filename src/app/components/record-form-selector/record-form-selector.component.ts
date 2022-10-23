import { Component, Input, OnInit } from '@angular/core';
import { emptyRecord, Record } from '../../models';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-record-form-selector',
  templateUrl: './record-form-selector.component.html',
  styleUrls: ['./record-form-selector.component.scss']
})
export class RecordFormSelectorComponent implements OnInit {

  @Input()
  item?: Record;

  form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      record: this.fb.control(emptyRecord())
    })
  }

  ngOnInit(): void {
    this.form.patchValue({
      record: this.item
    });
  }

  save() {

  }

  cancel() {

  }

  delete() {

  }
}
