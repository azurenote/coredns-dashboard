import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { RecordEditorTypeMxComponent } from './record-editor-type-mx.component';

describe('RecordEditorTypeMxComponent', () => {
  let component: RecordEditorTypeMxComponent;
  let fixture: ComponentFixture<RecordEditorTypeMxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule
      ],
      declarations: [ RecordEditorTypeMxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordEditorTypeMxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('has name input', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement: Element = compiled.querySelector('mat-form-field input[name="name"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('text');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('text.fill-the-input');

  });

  it('has a text input for the mail host name', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('mat-form-field input[name="host"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('text');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('text.fill-the-input');
  });

  it('has a number input for priority', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('mat-form-field input[name="priority"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('number');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('keywords.priority');
  });

  it('has a number input for TTL', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('mat-form-field input[name="ttl"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('number');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('keywords.ttl');
  });

  describe('with record input',  () => {
    let component: RecordEditorTypeMxComponent;
    let fixture: ComponentFixture<RecordEditorTypeMxComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(RecordEditorTypeMxComponent);
      component = fixture.componentInstance;

      component.record = {
        zone: 'my-zone.',
        name: 'mail-host',
        ttl: 300,
        recordType: 'MX',
        content: {
          host: '1.2.3.4',
          priority: 99
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

      const priorityInput = compiled.querySelector('mat-form-field input[name="priority"]')
      expect(parseInt(priorityInput.value))
        .toEqual(component.record.content.priority);

      const ttlInput = compiled.querySelector('mat-form-field input[name="ttl"]');
      expect(parseInt(ttlInput.value))
        .toEqual(component.record.ttl);
    });
  });
});
