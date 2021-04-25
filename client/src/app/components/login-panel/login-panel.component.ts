import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { InfoPopupService } from '../../services/info-popup.service';
import infoConfig from '../../assets/configs/infoConfig.json';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.styl']
})
export class LoginPanelComponent {

  constructor(
    private readonly keycloak: KeycloakService,
    private infoPopupService: InfoPopupService
  ) { }

  public async login() {
    await this.keycloak.login();
    this.infoPopupService.setIsActive(true);
    this.infoPopupService.setInfoContent(infoConfig.messages.logout);
  }

  public register() {
    this.keycloak.register();
  }

}
