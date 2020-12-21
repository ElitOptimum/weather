import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getWeather(code: string, location: string, useFahrenheit: boolean): Observable<Weather> {
    const url = `${environment.weatherUrl}?key=${environment.apiKey}&days=10&city=${location}&country=${code}&units=${useFahrenheit? 'I' : 'M'}`
    return this.httpClient.get<Weather>(url);
  }
}