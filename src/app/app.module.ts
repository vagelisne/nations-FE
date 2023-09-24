import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { CountriesWithAreaComponent } from './countries-with-area/countries-with-area.component';
import { HttpClientService } from "./services/http-client.service";
import { HttpClientModule } from "@angular/common/http";
import { CountryLanguagesComponent } from './country-languages/country-languages.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    CountriesWithAreaComponent,
    CountryLanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
