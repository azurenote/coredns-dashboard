import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
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

  it('should have a text input for domain name', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement: Element = compiled.querySelector('mat-form-field input[name="name"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('text');

    expect(inputElement.getAttribute('placeholder')).toBeTruthy();
  });

  it('should have a text input for canonical name', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement = compiled.querySelector('mat-form-field input[name="target"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('text');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('text.fill-the-input');
  });

  it('should have a number input for TTL', () => {
    const compiled = fixture.debugElement.nativeElement;
    const inputElement: Element = compiled.querySelector('mat-form-field input[name="ttl"]');

    expect(inputElement).toBeTruthy();

    expect(inputElement.getAttribute('type'))
      .toEqual('number');

    expect(inputElement.getAttribute('placeholder'))
      .toEqual('text.fill-the-input');
  });
});
