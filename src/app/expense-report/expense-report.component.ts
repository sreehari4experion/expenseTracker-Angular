import { Component, OnInit } from '@angular/core';
// import { expService } from '../shared/users.service';
import { ExpensesService } from '../shared/expenses.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Expenses } from '../shared/expenses';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
} from '@angular/forms';
import { Category } from '../shared/category';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.scss'],
})
export class ExpenseReportComponent implements OnInit {
  userName = localStorage.getItem('userName');

  loginForm!: FormGroup;
  isSubmitted = false;
  error = '';
  loginUser: any = new Date();

  constructor(
    public expService: ExpensesService,
    private router: Router,
    private toastr: ToastrService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    //creates a reactive form model
    this.loginForm = this.formBuilder.group({
      //FormControlname Fields
      Date: '',
    });
    console.log(this.loginForm.value);
  }

  onSubmit() {
    console.log('submitted');
    console.log(this.loginForm.value);
    this.expService.bindListMaxCategory(
      this.loginForm.value.Date,
      this.userName
    );
  }
}
