import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClientService } from "../services/http-client.service";
import { Subscription } from "rxjs";
import { CountryLanguageDTO } from "../model/country-language-dto";

@Component({
  selector: 'app-country-languages',
  templateUrl: './country-languages.component.html',
  styleUrls: ['./country-languages.component.scss']
})
export class CountryLanguagesComponent implements OnInit, OnDestroy {
  subscriptions: Subscription[] = [];
  countryLanguages: CountryLanguageDTO[] = [];
  countryName: string = '';
  officialLanguage: string = '';

  constructor(private route: ActivatedRoute, private httpClient: HttpClientService) { }

  ngOnInit(): void {
    let countryID = this.route.snapshot.paramMap.get('countryID')!;
    let url = `http://localhost:8080/country/${countryID}/languages`
    const sub = this.httpClient.get<CountryLanguageDTO[]>(url).subscribe(response => {
      this.countryLanguages = response;
      this.countryName = this.countryLanguages[0].countryName;
      this.officialLanguage = this.countryLanguages.find(cl => cl.officialLanguage)!.language;
    });

    this.subscriptions.push(sub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}
