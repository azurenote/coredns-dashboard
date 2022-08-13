import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsModule } from "../../materials/materials.module";
import { RecordFormSelectorComponent } from './record-form-selector.component';

import { RecordEditorTypeAComponent } from '../forms/record-editor-type-a/record-editor-type-a.component';
import { RecordEditorTypeCnameComponent } from '../forms/record-editor-type-cname/record-editor-type-cname.component';
import { RecordEditorTypeMxComponent } from '../forms/record-editor-type-mx/record-editor-type-mx.component';

describe('RecordFormSelectorComponent', () => {
  let component: RecordFormSelectorComponent;
  let fixture: ComponentFixture<RecordFormSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialsModule
      ],
      declarations: [
        RecordFormSelectorComponent,
        RecordEditorTypeAComponent,
        RecordEditorTypeCnameComponent,
        RecordEditorTypeMxComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordFormSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
