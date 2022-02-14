import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
// import { UsersService } from '../shared/users.service';
import { ExpensesService } from '../shared/expenses.service';

@Component({
  selector: 'app-addexpense',
  templateUrl: './addexpense.component.html',
  styleUrls: ['./addexpense.component.scss'],
})
export class AddexpenseComponent implements OnInit {
  items: any = [];
  constructor(
    public expService: ExpensesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.expService.bindListCategories();
    console.log('categories');
  }
  //submit form
  onSubmit(form: NgForm) {
    console.log(form.value);
    let addId = this.expService.expenseFormData.ExpenseId;
    if (addId == 0 || addId == null) {
      this.insertExpense(form);
      console.log('posted');

      this.resetForm(form);
    } else {
      //update
      console.log('updated');
      this.updateExpense(form);
      this.resetForm(form);
    }
    //insert or update
  }
  //item adding individual
  onSubmitItem(itemform: NgForm) {
    console.log(itemform.value);
  }

  //insert method
  insertExpense(form: NgForm) {
    console.log('inserted record');
    console.log(form);
    console.log(form.value);

    this.expService.insertExpense(form.value).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  //update employee record
  updateExpense(form: NgForm) {
    console.log('updated record');
    this.expService.updateExpense(form.value).subscribe(
      (res) => {
        console.log(res);
        console.log('success put');
      },
      (error) => {
        console.log(error);
        console.log('error');
      }
    );
  }

  //clear all contents after submit-- initialise
  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
  }

  //add individual items
  addItem(itemform: NgForm) {
    console.log(itemform.value);
  }
}
