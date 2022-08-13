import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordFormSelectorComponent } from './record-form-selector.component';

describe('RecordFormSelectorComponent', () => {
  let component: RecordFormSelectorComponent;
  let fixture: ComponentFixture<RecordFormSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordFormSelectorComponent ]
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
