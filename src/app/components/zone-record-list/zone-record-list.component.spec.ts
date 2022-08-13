import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneRecordListComponent } from './zone-record-list.component';

describe('ZoneRecordListComponent', () => {
  let component: ZoneRecordListComponent;
  let fixture: ComponentFixture<ZoneRecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneRecordListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
