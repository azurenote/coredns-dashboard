import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { RecordEditorTypeMxComponent } from './record-editor-type-mx.component';

describe('RecordEditorTypeMxComponent', () => {
  let component: RecordEditorTypeMxComponent;
  let fixture: ComponentFixture<RecordEditorTypeMxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        MatFormFieldModule,
        MatInputModule
      ],
      declarations: [ RecordEditorTypeMxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordEditorTypeMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
