import { Injectable } from '@angular/core';
import { Users } from '../shared/users';
import { Expenses } from '../shared/expenses';
import { Category } from '../shared/category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // retrieve all data from users
  users: Users[] = [];
  // users = Users[];
  formData: Users = new Users();

  constructor(private httpClient: HttpClient) {}

  bindListUsers() {
    this.httpClient
      .get(environment.apiUrl + '/api/user')
      .toPromise()
      .then((res) => {
        this.users = res as Users[];
        console.log(res);
        console.log(this.users);
      });
  }
  bindUserById(id: number) {
    this.httpClient
      .get(environment.apiUrl + '/api/user/' + id)
      .toPromise()
      .then((res) => {
        this.formData = res as Users;
        console.log(res);
        console.log(this.formData);
      });
  }
  //insert user
  insert(user: Users): Observable<any> {
    return this.httpClient.post(environment.apiUrl + '/api/User', user);
  }

  //update employee
  update(user: Users): Observable<any> {
    return this.httpClient.put(environment.apiUrl + '/api/User', user);
  }

  //delete employee
  deleteUser(id: number): Observable<any> {
    return this.httpClient.delete(environment.apiUrl + '/api/User/' + id);
  }
}
