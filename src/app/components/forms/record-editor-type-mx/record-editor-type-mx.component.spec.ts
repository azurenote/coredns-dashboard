import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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
        MatInputModule
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
  it('should have name input', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement: Element = compiled.querySelector('mat-form-field input[name="name"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('text');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('text.fill-the-input');

  });

  it('should have a text input for the mail host name', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('mat-form-field input[name="host"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('text');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('text.fill-the-input');
  });

  it('should have a number input for priority', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('mat-form-field input[name="priority"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('number');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('keywords.priority');
  });

  it('should have a number input for TTL', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('mat-form-field input[name="ttl"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('number');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('keywords.ttl');
  });
});
