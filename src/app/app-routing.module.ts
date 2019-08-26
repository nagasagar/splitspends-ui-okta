import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExpenseListComponent} from './expense-list/expense-list.component';
import { HomeComponent } from './home/home.component';
import { OktaAuthGuard } from '@okta/okta-angular';
import { OktaCallbackComponent,OktaLoginRedirectComponent } from '@okta/okta-angular';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'implicit/callback',
    component: OktaCallbackComponent
  },
  {
    path: 'login',
    component: OktaLoginRedirectComponent
  },
  {
    path: 'expenses-list',
    component: ExpenseListComponent,
    canActivate: [OktaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
