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
    RecordContentDisplayComponent
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
    GraphQLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
