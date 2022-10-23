import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OverlayModule } from '@angular/cdk/overlay';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { UserInfoSummaryComponent } from './components/user-info-summary/user-info-summary.component';
import { ZoneListComponent } from './components/zone-list/zone-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GraphQLModule } from './graphql/graphql.module';
import { ZoneListViewComponent } from './views/zone-list-view/zone-list-view.component';
import { ZoneRecordListComponent } from './components/zone-record-list/zone-record-list.component';
import { ZoneDetailViewComponent } from './views/zone-detail-view/zone-detail-view.component';
import { MaterialsModule } from './materials/materials.module';
import { RecordContentDisplayComponent } from './components/record-content-display/record-content-display.component';
import { RecordEditorTypeAComponent } from './components/forms/record-editor-type-a/record-editor-type-a.component';
import { RecordEditorTypeMxComponent } from './components/forms/record-editor-type-mx/record-editor-type-mx.component';
import { RecordEditorTypeCnameComponent } from './components/forms/record-editor-type-cname/record-editor-type-cname.component';
import { RecordFormSelectorComponent } from './components/record-form-selector/record-form-selector.component';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BadgeLabelComponent } from './components/badge-label/badge-label.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecordEditorComponent } from './components/forms/record-editor/record-editor.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http,'./assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    UserInfoSummaryComponent,
    ZoneListComponent,
    ZoneListViewComponent,
    ZoneRecordListComponent,
    ZoneDetailViewComponent,
    RecordContentDisplayComponent,
    RecordEditorTypeAComponent,
    RecordEditorTypeMxComponent,
    RecordEditorTypeCnameComponent,
    RecordFormSelectorComponent,
    BadgeLabelComponent,
    RecordEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GraphQLModule,
    HttpClientModule,
    OverlayModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (HttpLoaderFactory),
        deps: [HttpClient]
      },
      defaultLanguage: 'en-US'
    }),
    MaterialsModule,
    GraphQLModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
