import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-forgetpass',
  templateUrl: 'forgetpass.html',
})
export class ForgetpassPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpassPage');
  }
exist(){
  this.navCtrl.pop();
}
}
