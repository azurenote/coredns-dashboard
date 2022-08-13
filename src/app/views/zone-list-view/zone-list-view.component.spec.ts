import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneListViewComponent } from './zone-list-view.component';

describe('ZoneListViewComponent', () => {
  let component: ZoneListViewComponent;
  let fixture: ComponentFixture<ZoneListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoneListViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
