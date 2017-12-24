import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(private fire : AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
 signIn(){
   this.navCtrl.push(LoginPage);
 }
  gomain(){
   this.navCtrl.setRoot(TabsPage);
 }
}
