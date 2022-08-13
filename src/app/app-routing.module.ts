import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ZoneListViewComponent } from './views/zone-list-view/zone-list-view.component';

const routes: Routes = [
  { path: '**', component: ZoneListViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
