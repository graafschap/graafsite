import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { WelkomComponent } from './welkom/welkom.component';
import { GraafschapTileComponent } from './component/graafschap-tile/graafschap-tile.component';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    WelkomComponent,
    GraafschapTileComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
