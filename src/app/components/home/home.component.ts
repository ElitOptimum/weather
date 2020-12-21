import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';
import { states } from 'src/app/static/states';
import { getAverageTemp } from 'src/app/util/calc/average.calc';
import { getTempColors } from 'src/app/util/calc/color.calc';
import { fahrenheitToCelsius } from 'src/app/util/calc/convert.calc';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('homeWrapper')
  background: ElementRef<HTMLDivElement> | undefined;
  states = states;
  selectedState = states[0];
  location = '';
  weatherData: Weather | null = null;
  useFahrenheit = false;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  submit() {
    this.weatherService.getWeather(this.selectedState.code, this.location, this.useFahrenheit).subscribe({
      error: () => { this.weatherData = null },
      next: (res) => { this.weatherData = res; this.setBackground() }
    });
  }

  fahrenheit(event: any) {
    this.useFahrenheit = event.checked;
  }
  
  setBackground() {
    if (this.weatherData) {
      let averageTemp = getAverageTemp(this.weatherData);
      if (this.useFahrenheit) {
        averageTemp = fahrenheitToCelsius(averageTemp);
      }
      const { averageDownColor, averageColor, averageUpColor } = getTempColors(averageTemp);
      this.background!.nativeElement.style.background = `linear-gradient(130.54deg, ${averageDownColor}, ${averageColor}, ${averageUpColor})`;
      
    }
  }
}
