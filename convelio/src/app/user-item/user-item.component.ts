import { Component, OnInit, Input } from '@angular/core';
import { User } from '../users/types/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit {
  @Input() user?: User;

  constructor() {}

  ngOnInit(): void {}
}
