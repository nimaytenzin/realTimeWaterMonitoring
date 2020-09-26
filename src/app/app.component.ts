import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'real-time-water-monitoring';
  private map;

  constructor() { }

  ngOnInit(): void {
     this.map = L.map('map').setView([27.472940, 89.634361], 16);
    const tiles = L.tileLayer('http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}', {
      maxZoom:20,
    });
    tiles.addTo(this.map)
    
  }
}


