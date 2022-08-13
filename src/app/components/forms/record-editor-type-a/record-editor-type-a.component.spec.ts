import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordEditorTypeAComponent } from './record-editor-type-a.component';

describe('RecordEditorTypeAComponent', () => {
  let component: RecordEditorTypeAComponent;
  let fixture: ComponentFixture<RecordEditorTypeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
