import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

import { RecordFormSelectorComponent } from './record-form-selector.component';

import { RecordEditorTypeAComponent } from '../forms/record-editor-type-a/record-editor-type-a.component';
import { RecordEditorTypeCnameComponent } from '../forms/record-editor-type-cname/record-editor-type-cname.component';
import { RecordEditorTypeMxComponent } from '../forms/record-editor-type-mx/record-editor-type-mx.component';

describe('RecordFormSelectorComponent', () => {
  let component: RecordFormSelectorComponent;
  let fixture: ComponentFixture<RecordFormSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        TranslateModule.forRoot()
      ],
      declarations: [
        RecordFormSelectorComponent,
        RecordEditorTypeAComponent,
        RecordEditorTypeCnameComponent,
        RecordEditorTypeMxComponent
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordFormSelectorComponent);
    component = fixture.componentInstance;
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has action button "Ok"', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const element: HTMLElement = compiled.querySelector('button');

    expect(element).toBeTruthy();
  });

  describe('with A record', () => {
    it('shows editor form for the A record', () => {
      component.item = {
        recordType: 'A',
        zone: 'test.',
        name: 'unit',
        ttl: 999,
        content: {
          ip: '1.2.3.4'
        }
      };

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const element: HTMLElement = compiled.querySelector('app-record-editor-type-a');

      expect(element).toBeTruthy();
    });
  });

  describe('with CNAME record', () => {
    it('shows editor form for the CNAME record', () => {
      component.item = {
        recordType: 'CNAME',
        zone: 'test.',
        name: 'unit',
        ttl: 999,
        content: {
          host: 'canonical.name.of.somewhere.host'
        }
      };

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const element: HTMLElement = compiled.querySelector('app-record-editor-type-cname');

      expect(element).toBeTruthy();
    });
  });

  describe('with MX record', () => {
    it('shows editor form for the MX record', () => {
      component.item = {
        recordType: 'MX',
        zone: 'unit.test.',
        name: 'mail',
        ttl: 999,
        content: {
          host: '1.2.3.4',
          priority: 99
        }
      };

      fixture.detectChanges();
      const compiled = fixture.debugElement.nativeElement;
      const element: HTMLElement = compiled.querySelector('app-record-editor-type-mx');

      expect(element).toBeTruthy();
    });
  });
});
