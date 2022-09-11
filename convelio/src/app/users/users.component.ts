import { User } from './types/user';
import { UserService } from '../services/users/user.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) {}

  getUsers(): void {
    this.userService.getUsers().subscribe(users => (this.users = users));
  }
  ngOnInit(): void {
    this.getUsers();
  }
}
