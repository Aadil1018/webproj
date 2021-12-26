import { Component, OnInit } from '@angular/core';
declare const L: any;
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log('location is not supported on this device');
    }
    navigator.geolocation.getCurrentPosition((position) => {
      const coords = position.coords;
      console.log(
        'latitude: ',
        position.coords.latitude,
        ', longitude: ',
        position.coords.longitude
      );
      var map = L.map('map').setView([coords.latitude, coords.longitude], 11);
      L.tileLayer(
        'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
        {
          attribution:
            'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox/streets-v11',
          tileSize: 512,
          zoomOffset: -1,
          accessToken:
            'pk.eyJ1IjoiYWFkaWwxMDE4IiwiYSI6ImNreGF1M3BzdDQwNGMydnFvZ3RnMzN1Z3UifQ.eRiA7BGvd5nT4Oo-F1Y0rw',
        }
      ).addTo(map);
      var marker = L.marker([coords.latitude, coords.longitude]).addTo(map);
      marker.bindPopup('<b>You Are Here!</b>').openPopup();
    });
    this.trackPosition();
  }

  trackPosition() {
    navigator.geolocation.watchPosition(
      (position) => {
        console.log(
          'latitude: ',
          position.coords.latitude,
          ', longitude: ',
          position.coords.longitude
        );
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
}
