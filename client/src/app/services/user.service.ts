import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { corsHeaders } from '../scripts/auth/connectOptions';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import apiConfig from '../../assets/configs/apiConfig.json';
import { IUserData } from '../interfaces/userData.interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: corsHeaders,
    withCredentials: true
  }

  public userData = new BehaviorSubject<IUserData | null>(null);
  public setUserData(data: IUserData):void {
    this.userData.next(data);
  }

  public username = new BehaviorSubject<string>('');
  public setUsername(newUsername: string):void {
    this.username.next(newUsername);
  }

  isLoggedIn():Observable<boolean> {
     return this.http.get<any>(`${apiConfig.poytersApiUrl}/users/profile/`, this.httpOptions)
      .pipe(map(response => {
        if (response.userId && response.userId !== '') return true;
        return false;
    }));
  }
}
