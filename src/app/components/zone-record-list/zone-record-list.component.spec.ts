import { ComponentFixture, flush, TestBed, waitForAsync } from '@angular/core/testing';
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
});
