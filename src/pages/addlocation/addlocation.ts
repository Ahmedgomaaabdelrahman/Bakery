import { CustomerProvider } from './../../providers/customer';
import { ProductProvider } from './../../providers/product';
import { Push } from '@ionic-native/push';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'page-addlocation',
  templateUrl: 'addlocation.html',
})

export class AddlocationPage {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public infoWindow : any;
  public markers : any [] =[] ;
  public latlng :any;
  public placelabel : any;
  public currentlat : any;
  public currentlng : any;
  constructor(public customer: CustomerProvider,public product: ProductProvider,private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams) {
    
  }
  ionViewWillEnter()
  {  

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
     

      google.maps.event.addListener(map, 'click', function(event) {
        if(self.markers.length > 0){
          for (var i = 0; i < self.markers.length; i++) {
            self.markers[i].setMap(null);
          
        }
        }
         
        placeMarker(event.latLng);

     });
     
     function placeMarker(location) {
     
         var marker = new google.maps.Marker({
             position: location, 
             map: map,
             animation: google.maps.Animation.DROP
         });
         console.log(location)
         self.markers.push(marker);
         self.currentlat = location.lat();
         self.currentlng = location.lng();
     }

     
      console.log(this.latlng);
     }).catch((error) => {
       console.log('Error getting location', error);
     }); 
     
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddlocationPage');
  }

 
 saveLocation(){
   console.log(this.currentlat , this.currentlng);
   this.product.addLocation(this.placelabel,this.customer.currentuser.user_id,this.currentlat,this.currentlng).subscribe((res)=>{
     console.log(res);
     this.navCtrl.pop();
   });
 }




  
}
