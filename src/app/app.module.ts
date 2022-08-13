import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { GraphQLModule } from './graphql.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { OverlayModule } from '@angular/cdk/overlay';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UserInfoSummaryComponent } from './components/user-info-summary/user-info-summary.component';
import { ZoneListComponent } from './components/zone-list/zone-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule } from '@angular/material/table';
import { ZoneListViewComponent } from './views/zone-list-view/zone-list-view.component';
import { ZoneRecordListComponent } from './components/zone-record-list/zone-record-list.component';
import { ZoneDetailViewComponent } from './views/zone-detail-view/zone-detail-view.component';

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
    ZoneDetailViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    GraphQLModule,
    HttpClientModule,
    MatCardModule,
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
    MatTooltipModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
