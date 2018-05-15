import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, ModalController, App } from 'ionic-angular';
import { ProductProvider } from './../../providers/product';
import { MainProvider } from '../../providers/main';
import { DetailsPage } from '../details/details';
import { CustomerProvider } from '../../providers/customer';
import { CommonServiceProvider } from '../../providers/common-service';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {
  public MainProvider = MainProvider;
  public search : any;
  public resultItems : any ;
  constructor(public _app:App,public modalCtrl :ModalController,public customer:CustomerProvider,public product:ProductProvider,public common:CommonServiceProvider, private menuCtrl:MenuController,public ProductProvider:ProductProvider,public navCtrl: NavController, public navParams: NavParams) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
 
  showDetails(images,name,details,quantity,itemid,subcatid,catid,rate){
    let detpage = this.modalCtrl.create(DetailsPage,{
       images : images , 
       name : name , 
       details : details , 
       quantity : quantity,
       itemid : itemid,
       catid : catid,
       subcatid : subcatid,
       rate : rate
     });
       console.log("From Home",{images,name,details,quantity});
       console.log(quantity);
       detpage.present();
      
      
   
   }
  gosearch(){
    this.ProductProvider.searchItem(this.search).subscribe((res)=>{
        this.resultItems = res;
        console.log(this.resultItems);
    });
  }

  addToCart(i,itemid,subcat,quanid,catid){
    if(this.customer.currentuser){
      this.product.addToCart(false,this.customer.currentuser.user_id,subcat,itemid,1,catid).subscribe((res)=>{
        console.log(res);
        // document.getElementById('no').textContent="1";
        if(res.state == false){
          this.common.presentToast("Already Added Before");
        }
        else{
          this.common.presentToast("Added Sucessfuly");
        
        }
      })
    }
    else{
      this.common.presentToast('you should login');
      this._app.getRootNav().setRoot(LoginPage);
    }
    console.log(i);
 
  }
}
