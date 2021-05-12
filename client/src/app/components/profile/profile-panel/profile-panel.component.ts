import { Component, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { InfoPopupService } from '../../../services/info-popup.service';
import { KeycloakService } from 'keycloak-angular';
import poytersAccountConfig from '../../../assets/configs/poytersAccount.config.json';

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
    private infoPopupService: InfoPopupService,
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
    console.log('here');
    this.infoPopupService.showInfoMessage('fawfawfaw', 4000);
  }

  public settings() {
    window.open(
      `${poytersAccountConfig.authServerUrl}/realms/poyters-account/account?refereer=poyters`,
      '_blank'
    );
  }

}


