import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DrewBoyFTW';
  weatherData: any;

  constructor(private http: HttpClient) {}
  
  getWeather(event: any) {
    let location = "Cambridge";

    // Call the Node.js API
    const weatherApiUrl = `/api/weather/${location}`;  // Call the backend API

    this.http.get(weatherApiUrl).subscribe(
      (data) => {
        this.weatherData = data;  // Store the weather data
        console.log(this.weatherData);  // Output weather data to the console
      },
      (error) => {
        console.error('Error fetching weather data:', error);  // Handle error
      }
    );
  }
}