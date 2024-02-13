import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { FormsModule } from '@angular/forms';
import { CommonModule, registerLocaleData } from '@angular/common';
import LocaleFr from '@angular/common/locales/fr';
import { ReplaceComma } from './shared/pipes/replaceComma';
import { StarRatingComponent } from './shared/components/star-rating/star-rating.component';
registerLocaleData(LocaleFr);

@NgModule({
  declarations: [
    AppComponent,
    HotelListComponent,
    ReplaceComma,
    StarRatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    {provide:'LOCALE_ID', useValue:'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
