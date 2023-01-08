import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from "@angular/platform-browser";
import { Apollo } from "apollo-angular";
import { ApolloTestingController, ApolloTestingModule } from 'apollo-angular/testing';
import { ZoneRecordListComponent } from './zone-record-list.component';

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
        ReactiveFormsModule
      ],
      declarations: [
        ZoneRecordListComponent
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

  it('has a data table', fakeAsync(() => {

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

    const { debugElement } = fixture;

    fixture.detectChanges(); // onInit();

    expect(debugElement.query(By.css('table#zone-record-list')))
      .withContext('No table before the component is initialized')
      .toBeFalsy();

    tick();
    fixture.detectChanges(); // view updated

    expect(debugElement.query(By.css('table#zone-record-list')))
      .withContext('There a table with the specified ID')
      .toBeTruthy();

    flush();
  }));
});
