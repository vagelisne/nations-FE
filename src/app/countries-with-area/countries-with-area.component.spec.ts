import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountriesWithAreaComponent } from './countries-with-area.component';

describe('CountriesWithAreaComponent', () => {
  let component: CountriesWithAreaComponent;
  let fixture: ComponentFixture<CountriesWithAreaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountriesWithAreaComponent]
    });
    fixture = TestBed.createComponent(CountriesWithAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
