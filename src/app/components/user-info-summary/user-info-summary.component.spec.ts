import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoSummaryComponent } from './user-info-summary.component';

describe('UserInfoSummaryComponent', () => {
  let component: UserInfoSummaryComponent;
  let fixture: ComponentFixture<UserInfoSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserInfoSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserInfoSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
