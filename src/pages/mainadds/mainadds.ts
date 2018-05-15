import { DetailsPage } from './../details/details';
import { MainProvider } from './../../providers/main';
import { ProductProvider } from './../../providers/product';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App  } from 'ionic-angular';
import 'rxjs/add/operator/map';
import {Observable, Subscriber} from "rxjs";
import { CustomerProvider } from '../../providers/customer';
import { CommonServiceProvider } from '../../providers/common-service';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-mainadds',
  templateUrl: 'mainadds.html',
})
export class MainaddsPage {
  public sliderprods : any[] = [];
  public otherOffers : any [] =[] ;
  quandiv : any [] = [];
  btnsdiv : any [] = [];
  public count2 : number [] = [];
  public mainProvider = MainProvider;
  icons : any[] = [];
  constructor(public _app:App,public common:CommonServiceProvider,public customer:CustomerProvider,public product:ProductProvider, public navCtrl: NavController, public navParams: NavParams) {
  
  }

  ionViewWillEnter(){
    console.log('ionViewDidLoad MainaddsPage');
    this.product.getsliderOffer().subscribe((res)=>{
      this.sliderprods = res;
      console.log(this.sliderprods);
    });
    
    this.product.getOtherOffer().subscribe((res)=>{
      this.otherOffers = res;
      console.log(this.otherOffers);
      
    });

  }

  godetails(images,subcatid,name,details,quantity,rate,itemid,catid) {
    this.navCtrl.push(DetailsPage,{images: images,subcatid:subcatid,name:name,details:details,quantity:quantity,rate:rate,itemid:itemid,catid:catid})
  }

  addToCart(i,itemid,subcat,quanid,catid){
    console.log(i);
    if(this.customer.currentuser){
      this.product.addToCart(false,this.customer.currentuser.user_id,subcat,itemid,1,catid,"",[],"","",[]).subscribe((res)=>{
        console.log(res);
        // document.getElementById('no').textContent="1";
        if(res.state == false){
          this.common.presentToast("Already Added Before");
        }
        else{
          this.common.presentToast("Added Sucessfuly");
          this.quandiv[i]='quandiv';
          this.btnsdiv[i]='disbtn';
          this.count2[i] = 1;
          MainProvider.cartNo++;
        }
      })
    }

    else{
      this.common.presentToast('you should login');
      this._app.getRootNav().setRoot(LoginPage);
    }
 
  }

  addToFav(itemid,icon){
    this.product.addtoFav(this.customer.currentuser.user_id,itemid).subscribe((res)=>{
      console.log(res);
      if(res == false){
        this.common.presentToast("Already Added Before");
      }
      else if(res == true){
        this.common.presentToast("Added Sucessfuly");
        this.icons[icon]='heart';
      }
    })
  }
}
