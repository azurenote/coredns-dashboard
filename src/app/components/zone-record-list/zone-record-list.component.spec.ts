import { ComponentFixture, fakeAsync, flush, TestBed, waitForAsync } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';

import { ZoneRecordListComponent } from './zone-record-list.component';
import { RecordFormSelectorComponent } from '../record-form-selector/record-form-selector.component';
import { By } from "@angular/platform-browser";
import { Apollo } from "apollo-angular";

describe('ZoneRecordListComponent', () => {
  let component: ZoneRecordListComponent;
  let fixture: ComponentFixture<ZoneRecordListComponent>;
  let apollo: Apollo;

  let controller: ApolloTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      imports: [
        NoopAnimationsModule,
        ApolloTestingModule,
        MatTableModule,
      ],
      declarations: [
        ZoneRecordListComponent,
        RecordFormSelectorComponent
      ]
    })
    .compileComponents();

    apollo = TestBed.inject(Apollo);

    controller = TestBed.inject(ApolloTestingController);

    fixture = TestBed.createComponent(ZoneRecordListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has a data table', fakeAsync(async () => {

    component.ngOnInit();

    controller.expectOne(component.QUERY).flush({
      data:{
        records: [
          {
            id: 0,
            zone: 'test.',
            name: 'test',
            recordType: 'A',
            ttl: 300,
            createdAt: new Date(),
            content: {
              ip: '1.2.3.4'
            }
          }
        ]
      }
    });

    await fixture.whenStable();
    fixture.detectChanges();

    flush();

    const { debugElement } = fixture;
    const inputElement = debugElement.query(By.css('table#zone-record-list'));

    expect(inputElement)
      .withContext('Check if is there a table with the specified ID')
      .toBeTruthy();
  }));
});
