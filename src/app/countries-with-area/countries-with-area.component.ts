import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClientService } from "../services/http-client.service";
import { CountryWithAreaDto } from "../model/country-with-area-dto";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-countries-with-area',
  templateUrl: './countries-with-area.component.html',
  styleUrls: ['./countries-with-area.component.scss']
})
export class CountriesWithAreaComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  readonly url = 'http://localhost:8080/countries/find-with-area';
  countries: CountryWithAreaDto[] = [];

  constructor(private httpClient: HttpClientService) { }

  ngOnInit() {
    const sub = this.httpClient.get<CountryWithAreaDto[]>(this.url).subscribe(response => {
      this.countries = response;
    })

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
