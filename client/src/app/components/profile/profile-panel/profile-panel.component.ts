import { Component, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { KeycloakService } from 'keycloak-angular';
import ssoConfig from '../../../assets/configs/sso.config.json';

@Component({
  selector: 'app-profile-panel',
  templateUrl: './profile-panel.component.html',
  styleUrls: ['./profile-panel.component.styl']
})
export class ProfilPanelComponent {

  @Input() username: string;

  public profileListIsOpen = false;
  public avatarAltText: string;

  constructor(
    private userService: UserService,
    private readonly keycloak: KeycloakService
  ) { }

  ngOnInit() {
    this.userService.userData.subscribe(data => {
      if (!data?.avatar) {
        this.avatarAltText = this.username?.[0].toUpperCase();
      }
    })
  }

  public toggleProfileList() {
    this.profileListIsOpen = !this.profileListIsOpen;
  }

  public async logout() {
    await this.keycloak.logout();
  }

  public settings() {
    window.open(
      `${ssoConfig.authServerUrl}/realms/${ssoConfig.realm}/account?refereer=poyters`,
      '_blank'
    );
  }

}

