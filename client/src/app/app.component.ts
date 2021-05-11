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
  private token;

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
    const loadUserInfo = await this.keycloak.getKeycloakInstance().loadUserInfo();
    this.token = await this.keycloak.getToken();
    console.log('token', this.token);
    console.log('userId', userId);
    console.log('this.userData', this.userData);
    console.log('loadUserInfo', loadUserInfo)

    if (!this.userData) {
      console.log('start fetching user data')
      const fetchedUserData = await this.fetchUserData(userId);
      console.log('fetchedUserData', fetchedUserData)
      this.userService.setUserData(fetchedUserData);
    }
  }

  private async fetchUserData(ssoId: string): Promise<IUserData | null> {
    const apiUrl = `http://localhost:3000/users/profile`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });
      const userData = await response.json();

      if (userData.status === 404) {
        console.log('creating user')
        return await this.createUser(ssoId);
      }

      return userData as IUserData;
    } catch (error) {
      console.log('error', error)

      return null;
    }
  }

  private async createUser(ssoId: string): Promise<IUserData | null> {
    const newUserData = JSON.stringify({ ssoId });
    console.log('newUserData', newUserData);

    try {
      const response = await fetch(
        `http://localhost:3000/users/create/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          },
          body: newUserData
        }
      );
      const userData = await response.json() as IUserData;

      console.log('created user', userData)
      return userData;
    } catch (error) {
      console.log('create error', error)
      return null;
    }
  }

}
