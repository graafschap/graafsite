import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { WelkomComponent } from './component/welkom/welkom.component';
import { GraafschapTileComponent } from './component/graafschap-tile/graafschap-tile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list'
import { ContentTileComponent } from './content-tile/content-tile.component';

import { WagensComponent } from './pages/wagens/wagens.component';
import { IndexComponent } from './pages/index/index.component';
import { AppRoutingModule } from './app-routing.module';
import { initializeKeycloak } from './init/keycloak-init.factory';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WelkomComponent,
    GraafschapTileComponent,
    WagensComponent,
    IndexComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatListModule,
    AppRoutingModule,
    KeycloakAngularModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService],
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
