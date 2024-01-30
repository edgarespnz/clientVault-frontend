import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { LoginUser } from '../../../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  login(loginUser: LoginUser) {
    return this.http.post(`${this.API_URL}/login`, loginUser);
  }
}
