import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    
  }

  login(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:3000/products/login', user);
  }
  
  logOut(): Observable<User>{
    return this.http.get<User>('http://localhost:3000/products/logout');
  }

  register(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:3000/products/register', user);
  }
}
