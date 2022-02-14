import { Component, OnInit } from '@angular/core';
// import { expService } from '../shared/users.service';
import { ExpensesService } from '../shared/expenses.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Expenses } from '../shared/expenses';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  //pagination and search
  page: number = 1;
  filter: string;
  userName = localStorage.getItem('userName');

  myExpenses: string[] = [];
  

  constructor(
    public expService: ExpensesService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log('lifecycle hooks started');
    this.expService.bindListExpenseOfUser(this.userName);

    this.toastr.success('Welcome ' + this.userName, 'Success');
  }

  onLogout() {
    localStorage.removeItem('userName');
    localStorage.removeItem('password');
    localStorage.removeItem('token');
    sessionStorage.removeItem('userName');
    sessionStorage.removeItem('password');

    this.router.navigate(['/login']);
  }
}
