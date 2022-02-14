import { Injectable } from '@angular/core';
import { Users } from '../shared/users';
import { Item } from '../shared/item';
import { Expenses } from '../shared/expenses';
import { Category } from '../shared/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpensesService {
  //get all categories
  maxXategories: {} = {};
  categories: Category[] = [];
  expenses: Expenses[] = [];
  items: Item[] = [];
  expenseFormData: Expenses = new Expenses();
  itemsFormData: Item = new Item();
  myExpenses: string[] = [];

  constructor(private httpClient: HttpClient) {}

  //get expense
  bindListExpense() {
    this.httpClient
      .get(environment.apiUrl + '/api/expense')
      .toPromise()
      .then((res) => {
        // this.expenses = res as Expenses[];
        console.log(res);

        // console.log(this.expenses);
      });
  }
  //get expenese of a user

  // get expense on date
  getExpenseOnDate(date: string, name: string): Observable<any> {
    return this.httpClient.get(
      environment.apiUrl + `/api/Expense/date&user${date}&${name}`
    );
  }
  //get category of maximum expense
  bindListMaxCategory(date: string, name: string) {
    this.httpClient
      .get(environment.apiUrl + `/api/Expense/maxCategory${date}&${name}`)
      .toPromise()
      .then((res) => {
        this.maxXategories = res as {};
        console.log('hello' + this.maxXategories);
      });
  }

  bindListExpenseOfUser(string) {
    this.httpClient
      .get(environment.apiUrl + '/api/expense/nameis' + string)
      .subscribe((res) => {
        this.myExpenses = res as string[];
        console.log(this.expenses);
      });
  }

  // get all items
  bindListItems() {
    this.httpClient
      .get(environment.apiUrl + '/api/Item')
      .toPromise()
      .then((res) => {
        this.items = res as Item[];
        console.log(this.items);
      });
  }

  //get categories
  bindListCategories() {
    this.httpClient
      .get(environment.apiUrl + '/api/entity/categories')
      .toPromise()
      .then((res) => {
        this.categories = res as Category[];

        console.log(this.categories);
      });
  }
  //insert expense
  insertExpense(expense: Expenses): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/Expense', expense);
  }

  //update expense
  updateExpense(expense: Expenses): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/Expense', expense);
  }

  //delete expense
  deleteExpense(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + '/api/Expense/' + id);
  }

  //insert item
  insertItem(item: Item): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/Item', item);
  }
  //update item
  updateItem(item: Item): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/Item', item);
  }
  //delete item
  deleteItem(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + '/api/Item/' + id);
  }
}
