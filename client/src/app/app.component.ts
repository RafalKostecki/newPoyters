import { Component, OnInit } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';
import { UserService } from './services/user.service';
import { IUserData } from './interfaces/userData.interface';
import poytersApiConfig from './assets/configs/poytersApi.config.json';

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
    this.token = await this.keycloak.getToken();

    if (!this.userData) {
      const fetchedUserData = await this.fetchUserData();
      this.userService.setUserData(fetchedUserData);
    }
  }

  private async fetchUserData(): Promise<IUserData | null> {
    const apiUrl = `${poytersApiConfig.url}/users/profile`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.token}`
        }
      });
      const userData = await response.json();

      if (userData.status === 404) {
        return await this.createUser();
      }

      return userData as IUserData;
    } catch (error) {

      return null;
    }
  }

  private async createUser(): Promise<IUserData | null> {
    try {
      const response = await fetch(
        `${poytersApiConfig.url}/users/create/`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${this.token}`
          }
        }
      );
      
      const userData = await response.json() as IUserData;

      return userData;
    } catch (error) {
      return null;
    }
  }

}
