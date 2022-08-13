import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { RecordEditorTypeAComponent } from './record-editor-type-a.component';

describe('RecordEditorTypeAComponent', () => {
  let component: RecordEditorTypeAComponent;
  let fixture: ComponentFixture<RecordEditorTypeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        MatFormFieldModule,
        MatInputModule
      ],
      declarations: [ RecordEditorTypeAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordEditorTypeAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
