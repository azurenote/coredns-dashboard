import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordContentDisplayComponent } from './record-content-display.component';

describe('RecordContentDisplayComponent', () => {
  let component: RecordContentDisplayComponent;
  let fixture: ComponentFixture<RecordContentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordContentDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordContentDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
