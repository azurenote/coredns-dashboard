import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { RecordEditorTypeCnameComponent } from './record-editor-type-cname.component';

describe('RecordEditorTypeCnameComponent', () => {
  let component: RecordEditorTypeCnameComponent;
  let fixture: ComponentFixture<RecordEditorTypeCnameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
      ],
      declarations: [ RecordEditorTypeCnameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordEditorTypeCnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('has a text input for domain name', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement: Element = compiled.querySelector('mat-form-field input[name="name"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('text');

    expect(inputElement.getAttribute('placeholder')).toBeTruthy();
  });

  it('has a text input for canonical name', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('mat-form-field input[name="host"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('text');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('text.canonical-name');
  });

  it('has a number input for TTL', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement: Element = compiled.querySelector('mat-form-field input[name="ttl"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('number');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('text.ttl-explain');
  });

  describe('with record input',  () => {
    let component: RecordEditorTypeCnameComponent;
    let fixture: ComponentFixture<RecordEditorTypeCnameComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(RecordEditorTypeCnameComponent);
      component = fixture.componentInstance;

      component.record = {
        zone: 'zone.',
        name: 'canonical-name',
        ttl: 300,
        recordType: 'CNAME',
        content: {
          host: 'somewhere.else.in.the.internet'
        }
      }

      fixture.detectChanges();
    });

    it('displays content of record', () => {
      const compiled = fixture.debugElement.nativeElement;

      const nameInput = compiled.querySelector('mat-form-field input[name="name"]')
      expect(nameInput.value)
        .toEqual(component.record.name);

      const contentInput = compiled.querySelector('mat-form-field input[name="host"]')
      expect(contentInput.value)
        .toEqual(component.record.content.host);

      const ttlInput = compiled.querySelector('mat-form-field input[name="ttl"]');
      expect(parseInt(ttlInput.value))
        .toEqual(component.record.ttl);
    });
  });
});
