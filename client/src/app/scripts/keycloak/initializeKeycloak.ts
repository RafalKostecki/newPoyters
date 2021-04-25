import { KeycloakService } from 'keycloak-angular';
import poytersAccountConfig from '../../assets/configs/poytersAccount.config.json';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: poytersAccountConfig.authServerUrl,
        realm: poytersAccountConfig.realm,
        clientId: poytersAccountConfig.resource,
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: poytersAccountConfig.checkLoginIframe,
      },
    });
}