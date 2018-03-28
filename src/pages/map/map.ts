import { Component,ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;

@IonicPage()
@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
    @ViewChild('map') mapElement: ElementRef;
    map: any;

    constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation ) {

    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad MapPage');
        this.loadMap();
    }

    loadMap(){

        this.geolocation.getCurrentPosition().then((position) => {

            console.log(position.coords);

            let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            let mapOptions = {
              center: latLng,
              zoom: 15,
              mapTypeId: google.maps.MapTypeId.ROADMAP
            }

            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

        }, (err) => {
            console.log(err);
        });

    }

}
