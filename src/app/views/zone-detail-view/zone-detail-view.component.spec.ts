import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneDetailViewComponent } from './zone-detail-view.component';

describe('ZoneDetailViewComponent', () => {
  let component: ZoneDetailViewComponent;
  let fixture: ComponentFixture<ZoneDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneDetailViewComponent ]
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
