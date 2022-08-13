import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneListComponent } from './zone-list.component';
import { MaterialsModule } from "../../materials/materials.module";

describe('ZoneListComponent', () => {
  let component: ZoneListComponent;
  let fixture: ComponentFixture<ZoneListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialsModule
      ],
      declarations: [ ZoneListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
