import { MainProvider } from './../../providers/main';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';
import { CustomerProvider } from '../../providers/customer';
import { Geolocation } from '@ionic-native/geolocation';

declare var google: any;

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  public map: any;
  public markers : any [] =[] ;
  public latlng :any;
  public currentlat : any;
  public currentlng : any;
  public branches : any [] = [];

  constructor(public mainprovider:MainProvider,public customer: CustomerProvider,public product: ProductProvider,private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams) {
    // this.product.getallBranches().subscribe((res)=>{
    //   this.branches = res ;
    //   console.log(this.branches);
    // });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MapPage');
    this.ionViewWillEnter();
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
        zoom: 5
      });

      var marker1 = new google.maps.Marker({
        position: {lat: resp.coords.latitude, lng: resp.coords.longitude},
        map: map,
        animation: google.maps.Animation.DROP,
      });
       
      self.markers.push(marker1);
      

    //   google.maps.event.addListener(map, 'click', function(event) {
    //     if(self.markers.length > 0){
    //       for (var i = 0; i < self.markers.length; i++) {
    //         self.markers[i].setMap(null);
          
    //     }
    //     }
         
    //     placeMarker(event.latLng);

      

    //  });


     self.product.getallBranches().subscribe((res)=>{
      self.branches = res ;
      for(let  i=0 ; i < self.branches.length ; i++ ){
        console.log(self.branches);
        
        branchMarker(self.branches[i].lat,self.branches[i].long , self.branches[i].adress, self.branches[i].branche_name , self.branches[i].branches_phone[0].phone);
     
      }
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


     function branchMarker(lat , lng , addres,branche_name,branches_phone1?:any) {
      var marker = new google.maps.Marker({
          position: {lat:lat, lng: lng},
          map: map,
          draggable: true,
          icon:'../assets/imgs/home-marker.png', 
          animation: google.maps.Animation.BOUNCE
      });

      marker.addListener('click', function() {
        var infowindow = new google.maps.InfoWindow({
          content:addres+"<br>"+branche_name+"<br>"+branches_phone1
        });
        infowindow.open(this.map,marker);
      });
      
      self.markers.push(marker);
     
  }

  
     
      console.log(this.latlng);
     }).catch((error) => {
       console.log('Error getting location', error);
     }); 
     
     
  }
}
