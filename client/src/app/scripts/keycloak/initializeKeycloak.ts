import { KeycloakService } from 'keycloak-angular';
import ssoConfig from '../../assets/configs/sso.config.json';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: ssoConfig.authServerUrl,
        realm: ssoConfig.realm,
        clientId: ssoConfig.resource,
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: ssoConfig.checkLoginIframe,
      },
    });
}