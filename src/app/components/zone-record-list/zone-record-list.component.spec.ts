import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';

import { ZoneRecordListComponent } from './zone-record-list.component';
import { RecordFormSelectorComponent } from '../record-form-selector/record-form-selector.component';

describe('ZoneRecordListComponent', () => {
  let component: ZoneRecordListComponent;
  let fixture: ComponentFixture<ZoneRecordListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        MatTableModule,
      ],
      declarations: [
        ZoneRecordListComponent,
        RecordFormSelectorComponent
      ]
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
