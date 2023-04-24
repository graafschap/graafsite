import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://sso.defjef.nl',
          realm: 'graafschap',
          clientId: 'website',
        },
        initOptions: {
          onLoad: 'check-sso',
          silentCheckSsoRedirectUri:
            // 'http://mko-gui-test.defjef.nl:8080/assets/silent-check-sso.html'
            window.location.origin + '/assets/silent-check-sso.html'
        },
        bearerExcludedUrls: ['/assets', '/clients/public'],
        shouldUpdateToken: (request) => {
          return !request.headers.get('token-update') === false;
        },            
      });
}