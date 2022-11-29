import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { WelkomComponent } from './component/welkom/welkom.component';
import { GraafschapTileComponent } from './component/graafschap-tile/graafschap-tile.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ContentTileComponent } from './content-tile/content-tile.component';

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
