import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule } from '@ngx-translate/core';

import { RecordContentDisplayComponent } from './record-content-display.component';
import { BadgeLabelComponent } from '../badge-label/badge-label.component';
import { RecordA, RecordCNAME, RecordMX } from '../../models/record.entity';
import { ReactiveFormsModule } from '@angular/forms';

describe('RecordContentDisplayComponent', () => {
  let component: RecordContentDisplayComponent;
  let fixture: ComponentFixture<RecordContentDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        ReactiveFormsModule
      ],
      declarations: [
        RecordContentDisplayComponent,
        BadgeLabelComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordContentDisplayComponent);
    component = fixture.componentInstance;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('with A record', () => {
    it('shows IP of content field', () => {

      const testData: RecordA = {
        recordType: 'A',
        zone: 'test.',
        name: 'unit',
        ttl: 999,
        content: {
          ip: '1.2.3.4'
        }
      };

      component.record = testData;

      fixture.detectChanges();

      const compiled = fixture.debugElement.nativeElement;
      const element: HTMLElement = compiled.querySelector('div');

      expect(element).toBeTruthy();
      expect(element.innerText).toEqual(testData.content.ip);
    });
  });

  describe('with MX record', () => {
    it('shows mail host of content field', () => {

      const testData: RecordMX = {
        recordType: 'MX',
        zone: 'unit.test.',
        name: 'mail',
        ttl: 999,
        content: {
          host: '1.2.3.4',
          priority: 99
        }
      };

      component.record = testData;

      fixture.detectChanges();

      const compiled = fixture.debugElement.nativeElement;
      const element: HTMLElement = compiled.querySelector('span');

      expect(element).toBeTruthy();
      expect(element.innerText).toEqual(testData.content.host);
    });

    it ('shows priority of the record', () => {

      const testData: RecordMX = {
        recordType: 'MX',
        zone: 'unit.test.',
        name: 'mail',
        ttl: 999,
        content: {
          host: '1.2.3.4',
          priority: 999
        }
      };

      component.record = testData;

      fixture.detectChanges();

      const compiled = fixture.debugElement.nativeElement;
      const element: HTMLElement = compiled.querySelector('app-badge-label');

      expect(element).toBeTruthy();

      const innerLabel = element.querySelector('label');

      expect(innerLabel).toBeTruthy();

      expect(innerLabel?.innerText)
        .toEqual(`${testData.content.priority}`);
    });
  });

  describe('with CNAME record', () => {
    it('shows canonical name of the record', () => {

      const testData: RecordCNAME = {
        recordType: 'CNAME',
        zone: 'test.',
        name: 'unit',
        ttl: 999,
        content: {
          host: 'canonical.name.of.somewhere.host'
        }
      };

      component.record = testData;

      fixture.detectChanges();

      const compiled = fixture.debugElement.nativeElement;
      const element: HTMLElement = compiled.querySelector('div');

      expect(element).toBeTruthy();
      expect(element.innerText).toEqual(testData.content.host);
    });
  });

});
