import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';



@Component({
  selector: 'page-tartoptions',
  templateUrl: 'tartoptions.html',
})
export class TartoptionsPage {

  constructor(public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TartoptionsPage');
  }
 dismiss(){
    this.viewCtrl.dismiss();
  }
}
