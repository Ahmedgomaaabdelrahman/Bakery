import { HomePage } from './../home/home';
import { MainProvider } from './../../providers/main';
import { CommonServiceProvider } from './../../providers/common-service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer';
import { MainaddsPage } from '../mainadds/mainadds';

@Component({
  selector: 'page-editaccount',
  templateUrl: 'editaccount.html',
})
export class EditaccountPage {
  img : any;
  public MainProvider = MainProvider;
  constructor(public comm:CommonServiceProvider,public customer : CustomerProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditaccountPage');
    console.log(this.customer.currentuser);
  }


 updateUser(inputs :any){
   console.log(this.img);
    this.customer.updateUser(inputs.email,inputs.name,inputs.phone,inputs.password,this.img).subscribe((res)=>{
      console.log(res);
      this.navCtrl.push(MainaddsPage);
    });
 }

 addimage(){
   this.comm.galleryOrCamera().then((base64)=>{
      this.img = base64;
   });
 }
} 
