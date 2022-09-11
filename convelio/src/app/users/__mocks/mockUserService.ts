import { of } from 'rxjs';
import { MOCK_USERS } from './mockUsers';

export class MockUserService {
  getUsers() {
    return of(MOCK_USERS);
  }

  getUserDetails() {
    return of({
      data: {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: '-37.3159',
            lng: '81.1496',
          },
        },
      },
    });
  }
}
