import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { getAverageTemp } from 'src/app/util/calc/average.calc';

@Component({
  selector: 'app-weather-info',
  templateUrl: './weather-info.component.html',
  styleUrls: ['./weather-info.component.css']
})
export class WeatherInfoComponent implements OnInit, OnChanges {
  @Input()
  weather: Weather | null = null;
  @Input()
  fahrenheit: boolean | undefined;
  averageTemp = 0;
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.weather) {
      this.averageTemp = getAverageTemp(this.weather);
    }

  }

  ngOnInit(): void {

  }


}
