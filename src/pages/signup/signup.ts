import { TabsPage } from './../tabs/tabs';
import { HomePage } from './../home/home';
import { LoginPage } from './../login/login';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { CustomerProvider } from '../../providers/customer';

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
      @ViewChild('username') uname ;
      @ViewChild('email') email ;
      @ViewChild('password') pass ;
      public phone : any;
      public uid : any;
  constructor(public customer : CustomerProvider,private fire : AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
 signIn(){
   this.navCtrl.push(LoginPage);
 }
  gomain(){
    console.log(this.uname.value , this.email.value , this.pass.value);
  this.customer.registerUesr(this.email.value,this.uname.value,this.phone,this.uid).subscribe((res)=>{
          console.log(res);
  });
  }
}
