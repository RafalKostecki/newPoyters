import { Component } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.styl']
})
export class LoginPanelComponent {

  constructor(
    private readonly keycloak: KeycloakService
  ) { }

  public async login() {
    await this.keycloak.login();
  }

  public register() {
    this.keycloak.register();
  }

}
