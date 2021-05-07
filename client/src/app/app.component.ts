import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { UserService } from './services/user.service';
import { IUserData } from './interfaces/userData.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})


export class AppComponent implements OnInit {

  private userData;
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;

  constructor(
    private readonly keycloak: KeycloakService,
    private userService: UserService
  ) { }

  public async ngOnInit() {
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      this.loadUserData();
    }
  }

  private async loadUserData() {
    this.userService.userData.subscribe(data => this.userData = data);

    const userId = await this.keycloak.getKeycloakInstance().subject;
    const token = await this.keycloak.getToken();
    console.log('token', token);
    console.log('userId', userId);
    console.log('this.userData', this.userData);

    if (!this.userData) {
      const fetchedUserData = await this.fetchUserData(userId);
      this.userService.setUserData(fetchedUserData);
    }
  }

  private async fetchUserData(ssoId: string): Promise<IUserData | null> {
    try {
      const response = await fetch(`http://localhost:3000/users/profile/${ssoId}`);
      const userData = await response.json() as IUserData;

      return userData;
    } catch {
      return null;
    }
  }

}
