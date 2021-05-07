import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { corsHeaders } from '../scripts/auth/connectOptions';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import poytersApiConfig from '../assets/configs/poytersApi.config.json';
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
}
