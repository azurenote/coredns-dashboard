import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';

import { RecordEditorTypeAComponent } from './record-editor-type-a.component';

describe('RecordEditorTypeAComponent', () => {
  let component: RecordEditorTypeAComponent;
  let fixture: ComponentFixture<RecordEditorTypeAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        TranslateModule.forRoot(),
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
      ],
      declarations: [ RecordEditorTypeAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordEditorTypeAComponent);
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

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('text.fill-the-input');
  });

  it('has a text input for IPv4 address', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('mat-form-field input[name="ipv4"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('text');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('text.fill-the-input');
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
    let component: RecordEditorTypeAComponent;
    let fixture: ComponentFixture<RecordEditorTypeAComponent>;

    beforeEach(async () => {
      fixture = TestBed.createComponent(RecordEditorTypeAComponent);
      component = fixture.componentInstance;

      component.writeValue({
        zone: 'zone.',
        name: 'name',
        ttl: 300,
        recordType: 'A',
        content: {
          ip: '1.2.3.4'
        }
      });

      fixture.detectChanges();
    });

    it('displays content of record', () => {
      const compiled = fixture.debugElement.nativeElement;

      const nameInput = compiled.querySelector('mat-form-field input[name="name"]')
      expect(nameInput.value)
        .toEqual(component.form.value.name);

      const contentInput = compiled.querySelector('mat-form-field input[name="ipv4"]')
      expect(contentInput.value)
        .toEqual(component.form.value.content.ip);

      const ttlInput = compiled.querySelector('mat-form-field input[name="ttl"]');
      expect(parseInt(ttlInput.value))
        .toEqual(component.form.value.ttl);
    });
  });
});
