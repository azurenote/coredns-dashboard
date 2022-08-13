import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordEditorTypeMxComponent } from './record-editor-type-mx.component';

describe('RecordEditorTypeMxComponent', () => {
  let component: RecordEditorTypeMxComponent;
  let fixture: ComponentFixture<RecordEditorTypeMxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
