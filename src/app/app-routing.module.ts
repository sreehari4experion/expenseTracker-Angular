import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExpenseReportComponent } from './expense-report/expense-report.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './shared/auth.guard';
import { ItemsListComponent } from './items-list/items-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    data: { UserName: 'sreehari' },
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { UserName: 'admin' },
  },
  {
    path: 'admin/items',
    component: ItemsListComponent,
    canActivate: [AuthGuard],
    data: { UserName: 'admin' },
  },
  {
    path: 'dashboard/addexpense',
    component: AddexpenseComponent,
    canActivate: [AuthGuard],
    data: { UserName: 'sreehari' },
  },
  {
    path: 'dashboard/addexpense/:expenseId',
    component: AddexpenseComponent,
    canActivate: [AuthGuard],
    data: { UserName: 'sreehari' },
  },
  {
    path: 'dashboard/expenseReports',
    component: ExpenseReportComponent,
    canActivate: [AuthGuard],
    data: { UserName: 'sreehari' },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
