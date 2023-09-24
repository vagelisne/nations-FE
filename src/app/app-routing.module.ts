import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesWithAreaComponent } from "./countries-with-area/countries-with-area.component";
import { CountryLanguagesComponent } from "./country-languages/country-languages.component";

const routes: Routes = [
  { path: 'countries', component: CountriesWithAreaComponent },
  { path: 'country/:countryID', component: CountryLanguagesComponent },
  // { path: 'about', component: AboutComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
