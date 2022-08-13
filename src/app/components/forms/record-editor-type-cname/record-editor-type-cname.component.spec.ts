import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordEditorTypeCnameComponent } from './record-editor-type-cname.component';

describe('RecordEditorTypeCnameComponent', () => {
  let component: RecordEditorTypeCnameComponent;
  let fixture: ComponentFixture<RecordEditorTypeCnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
