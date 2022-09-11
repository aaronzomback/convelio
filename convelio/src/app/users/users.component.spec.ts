import { MockUserService } from './__mocks/mockUserService';
import { UsersComponent } from './users.component';
import { User } from './types/user';
import { UserService } from '../services/users/user.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { waitForAsync, TestBed, ComponentFixture } from '@angular/core/testing';
describe('Users Component', () => {
  let USERS: User[];
  let user: User;
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [UsersComponent],
      providers: [{ provide: UserService, useClass: MockUserService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    USERS = component.users;
    fixture.detectChanges();
  });

  it('should have users list fully populated', () => {
    fixture.detectChanges();
    expect(component.users.length).toEqual(10);
  });

  it(`User id 1 should render Bret as username`, () => {
    fixture.detectChanges();
    expect(component.users[0].username).toEqual('Bret');
  });
});
