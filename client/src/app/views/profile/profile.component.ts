import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';
import { IUserData } from '../../interfaces/userData.interface';
import { UserService } from '../../services/user.service';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.styl']
})
export class ProfileComponent implements OnInit {

  public portfolioProjects: Object;
  private categoryName: string = "Profile";
  public isLoggedIn = false;
  public userProfile: KeycloakProfile | null = null;
  public token: string;

  constructor(
    private data: UiService,
    private readonly keycloak: KeycloakService
  ) {}

  
  public async ngOnInit() {
    this.data.changeCategory(this.categoryName);
    this.isLoggedIn = await this.keycloak.isLoggedIn();

    if (this.isLoggedIn) {
      this.userProfile = await this.keycloak.loadUserProfile();
      this.token = await this.keycloak.getToken();
    }
  }

}
