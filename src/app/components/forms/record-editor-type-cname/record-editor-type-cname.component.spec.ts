import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { RecordEditorTypeCnameComponent } from './record-editor-type-cname.component';

describe('RecordEditorTypeCnameComponent', () => {
  let component: RecordEditorTypeCnameComponent;
  let fixture: ComponentFixture<RecordEditorTypeCnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        MatFormFieldModule,
        MatInputModule,
      ],
      declarations: [ RecordEditorTypeCnameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordEditorTypeCnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
