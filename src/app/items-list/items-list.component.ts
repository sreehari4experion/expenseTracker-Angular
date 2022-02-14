import { Component, OnInit } from '@angular/core';
// import { expService } from '../shared/users.service';
import { ExpensesService } from '../shared/expenses.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Expenses } from '../shared/expenses';
import { Item } from '../shared/item';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
})
export class ItemsListComponent implements OnInit {
  page: number = 1;
  filter: string;
  userName = localStorage.getItem('userName');
  myItems: Item[] = [];

  constructor(
    public expService: ExpensesService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log('lifecycle hooks started');
    this.expService.bindListItems();
  }
}
