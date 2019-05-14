import { Injectable } from '@angular/core';
import{ environment} from '../environments/environment'
import{MarkarIcon} from '../app/model/markar.icon'


declare var L: any;
var apiToekn = environment.MAPBOX_API_TOKEN;


@Injectable({
  providedIn: 'root'
})



export class MapService {

  constructor() { }

  redIcon = new MarkarIcon();

  latitude: any = 51.505;
  longitude: any = -0.09;
  watchLatitude: any = 51.505;
  watchLongitude: any = -0.09;

 public getCurrentPositionAndViewMap(mapid: string)
  {
    navigator.geolocation.getCurrentPosition((position) => {
       this.latitude = position.coords.latitude;
       this.longitude = position.coords.longitude;

       var mymap = L.map('mapid').setView([this.latitude, this.longitude ], 13);

          L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
          attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
          maxZoom: 18,
          id: 'mapbox.streets',
          accessToken: apiToekn
      }).addTo(mymap)

      this.getWatchPosition(mymap);
       
    });
  }

  getWatchPosition(mymap: any)
  {
    navigator.geolocation.watchPosition((position) => {
      
      this.watchLatitude = position.coords.latitude;
      this.watchLongitude = position.coords.longitude;

      var marker = L.marker([this.watchLatitude, this.watchLongitude], {icon:this.redIcon.redIcon}).addTo(mymap);
      marker.bindPopup("<b>Hello Nahid!</b><br>I want to work.").openPopup();
    });
  }

}
