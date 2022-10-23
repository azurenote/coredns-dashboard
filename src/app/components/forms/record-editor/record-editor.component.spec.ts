import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule } from '@ngx-translate/core';
import { RecordEditorComponent } from './record-editor.component';
import { MatIconModule } from '@angular/material/icon';

describe('RecordEditorComponent', () => {
  let component: RecordEditorComponent;
  let fixture: ComponentFixture<RecordEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        ReactiveFormsModule,
        MatSelectModule,
        MatIconModule
      ],
      declarations: [ RecordEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has type selector that changes record form', () => {
    const { debugElement, componentInstance } = fixture;

    const typeSelect = debugElement.query(By.css('[data-test-id="type-selector"]'));
    expect(typeSelect).toBeTruthy();

    componentInstance.form.patchValue({
      recordType: 'A'
    });

    fixture.detectChanges();

    const formSelected = debugElement.query(By.css('[data-test-id="type-a-editor"]'));

    expect(formSelected).toBeTruthy();

    expect(componentInstance.item?.recordType).toEqual('A');
  });
});
