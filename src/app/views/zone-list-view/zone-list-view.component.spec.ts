import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialsModule } from '../../materials/materials.module';
import { ZoneListViewComponent } from './zone-list-view.component';
import {
  RecordContentDisplayComponent
} from '../../components/record-content-display/record-content-display.component';
import { ZoneListComponent } from '../../components/zone-list/zone-list.component';

describe('ZoneListViewComponent', () => {
  let component: ZoneListViewComponent;
  let fixture: ComponentFixture<ZoneListViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialsModule
      ],
      declarations: [
        ZoneListViewComponent,
        ZoneListComponent,
        RecordContentDisplayComponent
      ]
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
