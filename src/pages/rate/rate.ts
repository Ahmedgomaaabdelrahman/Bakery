import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,Nav } from 'ionic-angular';


@Component({
  selector: 'page-rate',
  templateUrl: 'rate.html',
})
export class RatePage {

  constructor(public nav:Nav,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatePage');
  }
goHome(){
  this.nav.setRoot(TabsPage);
}
}
