import { KeycloakService } from "keycloak-angular";

export function initializeKeycloak(
  keycloak: KeycloakService
  ) {
    return () =>
      keycloak.init({
        config: {
          url: 'http://sso.defjef.nl' + '/auth',
          realm: 'test',
          clientId: 'frontend',
        }
      });
}