import { CommonServiceProvider } from './../../providers/common-service';
import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-contactus',
  templateUrl: 'contactus.html',
})
export class ContactusPage {
  contactNos: any[];
 public  links : any ;
 phone ;
 emails;
 address;

 fb;
 inst;
 twit;
 skype;
 msg : any;
  constructor(public comm:CommonServiceProvider,public product:ProductProvider,public navCtrl: NavController, public navParams: NavParams) {

    this.product.getContact().subscribe((res)=>{
      this.contactNos = res;
      console.log(this.contactNos[0]);  
      this.phone = res[0].phone_numbers;
      this.emails = res[0].emails;
      this.address = res[0].address;
    });
    this.product.getsocialmedia().subscribe((res)=>{
      this.links = res; 
      this.fb=res.facebook;
      this.inst=res.instgram;
      this.twit=res.twitter;
      this.skype=res.skype;

      console.log(this.links);    
    });
   
  }
 
  sendContact(){
    this.product.sendContact(this.msg).subscribe((res)=>{
      console.log(res);
      if(res.state=="202"){
        this.comm.presentToast("Sending Done");
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactusPage');
  }

}
