import { CartPage } from './../cart/cart';
import { CustomerProvider } from './../../providers/customer';
import { ActionSheetController } from 'ionic-angular';
import { tartcolor } from './../../providers/tartcolor';
import { tartadd } from './../../providers/tartadd';
import { MainProvider } from './../../providers/main';
import { ProductProvider } from './../../providers/product';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { CommonServiceProvider } from '../../providers/common-service';


@Component({
  selector: 'page-tartoptions',
  templateUrl: 'tartoptions.html',
})
export class TartoptionsPage {
  public colors : any[];
  public chosingcolors  = [];

  public sizes : any[] ;
  public chosingsize : any ;
  public adds : any[] ;
  public chosingadds = [];

  public itemid:any;
  public img:any;
  public MainProvider = MainProvider;
  public catid : any;
  public quantity:any;
  public result : any;
  public options : any ;
  public floor : any;
  public tartsize : any;
  public subcatid : any;
  @ViewChild('tarttext') tarttext ;

  constructor(public comm:CommonServiceProvider,public customer:CustomerProvider,public product:ProductProvider,public viewCtrl : ViewController,public navCtrl: NavController, public navParams: NavParams) {
     this.itemid =this.navParams.get('itemid');
     this.catid =this.navParams.get('catid');
     this.quantity = this.navParams.get('quantity');
     this.subcatid = this.navParams.get('subcatid');

     this.product.getTartOption(this.itemid).subscribe((res)=>{
       this.options = res;
       console.log("Options",this.options);
     });
   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TartoptionsPage');
    this.product.getTartAdds().subscribe((res)=>{
      this.adds = res;
      console.log(this.adds);
    });
    this.product.getTartColor().subscribe((res)=>{
      this.colors = res;
      console.log(this.colors);
    });
    this.product.getTartSize().subscribe((res)=>{
      this.sizes = res;
      console.log(this.sizes);
    });
  }
 dismiss(){
    this.viewCtrl.dismiss();
  }

  addimage(){
    this.comm.galleryOrCamera().then((base64)=>{
       this.img = base64;
    });
  }
  putadds(addid){
    let add = new tartadd(this.itemid,this.customer.currentuser.user_id,addid);
    this.chosingadds.push(add);
    console.log(this.chosingadds);
    this.comm.presentToast("Added Sucessfuly");
  }
  getsize(size_id){
     this.chosingsize = size_id;
     
  }
  getcolor(colorid){
    if(this.chosingcolors.find(x => x.Color_id == colorid)){
      console.log("I find it");
      // this.chosingcolors = this.chosingcolors.splice(colorid,1);
      console.log(this.chosingcolors);
    }
    else {
      let color = new tartcolor(colorid);
      this.chosingcolors.push(color);
      console.log(this.chosingcolors);
    }
  }
  addtoitem(subcat){
    console.log(this.tarttext.value);
    console.log(this.chosingadds);
    console.log(this.chosingcolors);
    console.log(this.chosingsize);

    this.product.addToCart(true,this.customer.currentuser.user_id,this.subcatid,
      this.itemid,
      1,
      this.catid,
      this.chosingsize,
      this.chosingcolors,
      this.tarttext.value,
      this.img,
      this.chosingadds).subscribe(res =>{
        this.result = res;
        this.comm.presentToast('Added Sucessfuly');
        this.navCtrl.pop();
      }
      );
  
    }
}
