import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'https://angotia.pl/auth',
        realm: 'poyters-account',
        clientId: 'poyters',
      },
      initOptions: {
        onLoad: 'check-sso',
        checkLoginIframe: false,
      },
    });
}