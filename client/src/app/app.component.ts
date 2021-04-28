import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';


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
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(private readonly keycloak: KeycloakService) { }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
    }
  }

  public login() {
    this.keycloak.login();
  }

  public logout() {
    this.keycloak.logout();
  }

}
