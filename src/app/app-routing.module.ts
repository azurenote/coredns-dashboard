import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneListViewComponent } from './views/zone-list-view/zone-list-view.component';
import { ZoneDetailViewComponent } from './views/zone-detail-view/zone-detail-view.component';

const routes: Routes = [
  { path: 'zone/:id', component: ZoneDetailViewComponent },
  { path: '**', component: ZoneListViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
