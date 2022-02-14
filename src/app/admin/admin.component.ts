import { Component, OnInit } from '@angular/core';
// import { expService } from '../shared/users.service';
import { UsersService } from '../shared/users.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  page: number = 1;
  filter: string;
  userName = localStorage.getItem('userName');

  constructor(
    public userService: UsersService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    console.log('lifecycle hooks started');
    this.userService.bindListUsers();
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
