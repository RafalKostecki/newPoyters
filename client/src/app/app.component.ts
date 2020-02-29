import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { corsHeaders } from '../assets/scripts/auth/connectOptions';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})


export class AppComponent {

  //Alert types
  public notice = "notice";
  public warning = "warning";
  //Alert messages
  public warningMess1 = "Now are maintain works. Can occur unexpected errors.";
  public noticeMess1 = 'I wanna invite u to see my <a href="https://www.facebook.com/poyterskostecki">Facebook</a> page!';
  public userId: string;

  constructor(
    private userService: UserService,
    private http: HttpClient
  ) { }

  private httpOptions = {
    headers: corsHeaders,
    withCredentials: true
  }

  ngOnInit() {
    // this.http.get('http://localhost:3000/users/profile/', this.httpOptions)
    // .subscribe(res => console.log(res));
    this.userService.userId.subscribe(newId => this.userId = newId)

    fetch(`http://localhost:3000/users/profile/`,
      {
        method: 'GET',
        headers: corsHeaders,
        credentials: 'include'
      })
    .then((res) => res.json())
    .then((resJSON) => {
      if (resJSON.userId) {
        this.userService.setUserId(resJSON.userId);
      }
    });
  }

}
