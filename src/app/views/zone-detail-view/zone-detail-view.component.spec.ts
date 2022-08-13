import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDetailViewComponent } from './zone-detail-view.component';
import { ZoneRecordListComponent } from "../../components/zone-record-list/zone-record-list.component";

describe('ZoneDetailViewComponent', () => {
  let component: ZoneDetailViewComponent;
  let fixture: ComponentFixture<ZoneDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ZoneDetailViewComponent,
        ZoneRecordListComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
