import { Component, Input } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { corsHeaders } from '../../scripts/auth/connectOptions';
import apiConfig from '../../assets/configs/apiConfig.json';
import { InfoPopupService } from '../../services/info-popup.service';
import infoConfig from '../../assets/configs/infoConfig.json';
import { KeycloakService } from 'keycloak-angular';


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
    private readonly keycloak: KeycloakService,
    private router: Router,
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

  public logout() {
    this.keycloak.logout();
    this.infoPopupService.setIsActive(true);
    this.infoPopupService.setInfoContent(infoConfig.messages.logout);
  }

  public settings() {
    window.open('https://angotia.pl/auth/realms/poyters-account/account?refereer=poyters', '_blank');
  }

}


