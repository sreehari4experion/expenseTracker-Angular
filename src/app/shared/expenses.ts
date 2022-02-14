import { Item } from './item';

export class Expenses {
  ExpenseId: number = 0;
  UserId: number = 0;
  ExpenseDate: Date = new Date();
  ExpenseAmount: number = 0;
  CategoryId: number = 0;
  CategoryName: string = '';
  Items: string[] = [];
}
