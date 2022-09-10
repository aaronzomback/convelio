import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from 'src/app/users/types/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<User[]> {
    return this.http
      .get<User[]>(this.usersUrl)
      .pipe(catchError(this.handleError<User[]>('getUsers', [])));
  }

  constructor(private http: HttpClient) {}
  private usersUrl = 'https://jsonplaceholder.typicode.com/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
