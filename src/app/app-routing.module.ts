import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './application/page/home/home.component';
import { AccountComponent } from './application/page/account/account.component';
import { DatatableComponent } from './application/page/datatable/datatable.component';

import { CookieService } from 'ngx-cookie-service/public-api';

const routes: Routes = [
  {
    path: 'login',
    component: HomeComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'datatable'
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'datatable',
    component: DatatableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
