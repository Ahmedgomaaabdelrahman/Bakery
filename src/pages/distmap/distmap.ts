import { MainProvider } from './../../providers/main';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';
import { CustomerProvider } from '../../providers/customer';
import { Geolocation } from '@ionic-native/geolocation';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';
declare var google: any;

@Component({
  selector: 'page-distmap',
  templateUrl: 'distmap.html',
})
export class DistmapPage {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public markers : any [] =[] ;
  public latlng :any;
  public currentlat : any;
  public currentlng : any;
  public location : any ;
  constructor(private launchNavigator: LaunchNavigator,public mainprovider:MainProvider,public customer: CustomerProvider,public product: ProductProvider,private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams) {
    this.location = this.navParams.get('location');
    console.log(this.location.lat);
    console.log(this.location.lng);
  

    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      let self = this;
      this.latlng = {lat: resp.coords.latitude, lng: resp.coords.longitude};
   

    
      var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        zoom: 15
      });

      var marker1 = new google.maps.Marker({
        position: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        map: map,
        animation: google.maps.Animation.DROP,
      });
       
      self.markers.push(marker1);
      
      branchMarker(self.location.lat,self.location.lng);
      this.launchNavigator.navigate([self.location.lat, self.location.lng], {
          start: [resp.coords.latitude , resp.coords.longitude]
      });

   
    
  

     function placeMarker(location) {
     
         var marker = new google.maps.Marker({
             position: location, 
             map: map,
             draggable: true,
             animation: google.maps.Animation.DROP
         });
         console.log(location)
         self.markers.push(marker);
         self.currentlat = location.lat();
         self.currentlng = location.lng();
     }


     function branchMarker(lat , lng) {

      console.log(lat , lng)
      var marker = new google.maps.Marker({
        position : {
          lat : parseFloat( lat ),
          lng : parseFloat( lng )
      },
          map: map,
          draggable: true,
          icon:'assets/imgs/home-marker.png', 
          animation: google.maps.Animation.BOUNCE
      });

      // marker.addListener('click', function() {
      //   var infowindow = new google.maps.InfoWindow({
      //     content:addres+"<br>"+branche_name+"<br>"+branches_phone1
      //   });
      //   infowindow.open(this.map,marker);
      // });
      
      self.markers.push(marker);
     
  }

  
     
      console.log(this.latlng);
     }).catch((error) => {
       console.log('Error getting location', error);
     }); 
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DistmapPage');
  }

}
