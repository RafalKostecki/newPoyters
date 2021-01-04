import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { corsHeaders } from './scripts/auth/connectOptions';
import apiConfig from './assets/configs/apiConfig.json';


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
    private userService: UserService
  ) { }

  ngOnInit() {
    this.userService.userData.subscribe(data => {
      this.userId = data?._id
    })

    fetch(`${apiConfig.poytersApiUrl}/users/profile/`,
      {
        method: 'GET',
        headers: corsHeaders,
        credentials: 'include'
      })
    .then(res => res.json())
    .then(resJSON => {
      if (resJSON._id) this.userService.setUserData(resJSON);
    });
  }

}
