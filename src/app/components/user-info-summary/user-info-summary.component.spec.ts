import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoSummaryComponent } from './user-info-summary.component';
import { MaterialsModule } from "../../materials/materials.module";

describe('UserInfoSummaryComponent', () => {
  let component: UserInfoSummaryComponent;
  let fixture: ComponentFixture<UserInfoSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialsModule
      ],
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
