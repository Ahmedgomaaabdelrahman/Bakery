import { CustomerProvider } from './../../providers/customer';
import { MainProvider } from './../../providers/main';
import { CartPage } from './../cart/cart';
import { CommonServiceProvider } from './../../providers/common-service';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController, MenuController, ModalController, NavParams, ActionSheetController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';
import 'rxjs/add/operator/map';
import {Observable, Subscriber} from "rxjs";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allcats : any [] ;
  public allItems : any [];
  public specItems : any [];
  public flag : boolean ;
  public allflag : boolean ;
  public filter : boolean ;
  public quan : boolean;
  public catid : any;
  public filterItems:any[] = [];
  public MainProvider = MainProvider;
  icons : any[] = [];
  quandiv : any [] = [];
  btnsdiv : any [] = [];
  defaultno:any = 1;
  public count2 : number [] = [];
  public cartitems : any [] =[];
  constructor(public actionSheetCtrl: ActionSheetController,public modalCtrl :ModalController,public navParams: NavParams,public customer:CustomerProvider,public product:ProductProvider,public common:CommonServiceProvider, private menuCtrl:MenuController,public navCtrl: NavController) {
    this.product.getUserCart(this.customer.currentuser.user_id).subscribe((res)=>{this.cartitems = res});
    MainProvider.cartNo = this.cartitems.length;
    this.catid = this.navParams.get('catid');
    this.product.getsubcat(this.catid).subscribe((res)=>{
      console.log(res);
      this.allcats = res;
    });
  }
  ionViewDidLoad(){
    this.product.getUserCart(this.customer.currentuser.user_id).subscribe((res)=>{this.cartitems = res});
    MainProvider.cartNo = this.cartitems.length;
  }
  ionViewWillEnter() {
    this.product.getUserCart(this.customer.currentuser.user_id).subscribe((res)=>{this.cartitems = res});
    MainProvider.cartNo = this.cartitems.length;
    this.flag = false;
    this.filter = false;
    this.allflag = true;
    console.log('ionViewDidLoad HomePAge');
    this.allItems = [];
    this.icons = [];
    this.quandiv = [];
    this.btnsdiv = [];
    this.allcats = [] ;
    this.allItems = [];
    this.specItems = [];
  
    // this.catid = this.navParams.get('catid');
    // this.product.getsubcat(this.catid).subscribe((res)=>{
    //   console.log(res);
    //   this.allcats = res;
    // });

    this.product.getAllItems(this.customer.currentuser.user_id).subscribe((res)=>{
     
      console.log("All Items"+res);
      this.allItems = res;
      console.log(this.allItems);
      for(let i=0;i<this.allItems.length;i++)
      {
        if(this.allItems[i].favorites[0]!=null)
        { this.icons.push('heart')}
        else  if(this.allItems[i].favorites[0]==null)
        { this.icons.push('heart-outline')}
      }
      for(let i=0;i<this.allItems.length;i++){
        if(this.allItems[i].cart[0]!=null)
        { 
          this.quandiv.push('quandiv'); 
          this.btnsdiv.push('disbtn')
        }
        else  if(this.allItems[i].cart[0]==null)
        { 
          this.quandiv.push('quandivdis'); 
          this.btnsdiv.push('nondisbtn')
        }
      }
      this.count2=[];
      for(let i=0;i<this.allItems.length;i++){
        if(this.allItems[i].cart.length > 0)
        {
        this.count2.push(this.allItems[i].cart[0].quantity);
        console.log(this.allItems[i].cart[0].quantity);
        console.log(this.count2);
        }
        else
        {
    }}
    });
  
  // if(this.catid){
  //  this.flag = true;
  //  this.allflag = false;
  //  this.filter = false;
  //  this.product.getChosItem(this.customer.currentuser.user_id,this.catid).subscribe((res)=>{
  //    console.log(res);
  //     this.specItems = res;
  //  });

  // }
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
    detpage.onDidDismiss(data=>{
      this.flag = false;
    // this.ionViewWillEnter();
    })
   

}
goCart(){
  this.navCtrl.push(CartPage);
  this.allflag = true;
  this.filter = false;
//   let cartpage =  this.modalCtrl.create(CartPage);
  
//   cartpage.onDidDismiss(data => {
//     this.product.getAllItems(this.customer.currentuser.user_id).subscribe((res)=>{
      
//        console.log("All Items"+res);
//        this.allItems = res;
//        console.log(this.allItems);
//        for(let i=0;i<this.allItems.length;i++)
//        {
//          if(this.allItems[i].favorites[0]!=null)
//          { this.icons.push('heart')}
//          else  if(this.allItems[i].favorites[0]==null)
//          { this.icons.push('heart-outline')}
//        }
//        for(let i=0;i<this.allItems.length;i++){
//          if(this.allItems[i].cart[0]!=null)
//          { 
//            this.quandiv.push('quandiv'); 
//            this.btnsdiv.push('disbtn')
//          }
//          else  if(this.allItems[i].cart[0]==null)
//          { 
//            this.quandiv.push('quandivdis'); 
//            this.btnsdiv.push('nondisbtn')
//          }
//        }
//      });
//   });
//   cartpage.present();
}

getItemsCat(catid){
  this.product.getsubitems(catid).subscribe((res)=>{
    console.log(res);
     this.specItems = res;
  })
}

addToCart(i,itemid,subcat,quanid,catid){
  console.log(i);
  this.product.addToCart(false,this.customer.currentuser.user_id,subcat,itemid,1,catid).subscribe((res)=>{
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

increaseQuan(i,itemid,catid,subcat){
  this.count2[i] = this.count2[i]  + 1;
  this.product.addToCart(false,this.customer.currentuser.user_id,subcat,itemid,this.count2[i],catid).subscribe((res)=>{
        if(res == 1){
          console.log("Quan increased to "+ this.count2[i]);
        }
  });
}
decreaseQuan(i,itemid,catid,subcat){
  if(this.count2[i] == 1){
    this.quandiv[i]='quandivdis';
    this.btnsdiv[i]='nondisbtn';
    // this.product.delCartItem(this.customer.currentuser.user_id,itemid).subscribe((res)=>{
    //     console.log(res);
    // });
  }
  else {
    this.count2[i] = this.count2[i]  - 1;
    this.product.addToCart(false,this.customer.currentuser.user_id,subcat,itemid,this.count2[i],catid).subscribe((res)=>{
          if(res == 1){
            console.log("Quan decreased to "+ this.count2[i]);
          }
    });
  }

 
}


presentSheet(translatedArray : string[]) {
  let actionSheet = this.actionSheetCtrl.create({
   
    buttons: [
      {
        text:translatedArray[0],
        handler: () => {
          this.filter = true;
          this.flag = false;
          this.allflag=false;
          console.log('Archive clicked');
          this.product.filternewArrival(this.customer.currentuser.user_id).subscribe((res)=>{
              this.filterItems = res;
              console.log(this.filterItems);
          });
        }
      },
      {
        text:translatedArray[1],
        role: 'Popularity',
        handler: () => {
          this.filter = true;
          this.flag = false;
          this.allflag=false;
          console.log('Cancel clicked');
          this.product.filterPopular(this.customer.currentuser.user_id).subscribe((res)=>{
            this.filterItems = res;
            console.log(this.filterItems);
        });
        }
      },
      {
        text:translatedArray[2],
        role: 'Top',
        handler: () => {
          this.filter = true;
          this.flag = false;
          this.allflag=false;
          console.log('Cancel clicked');
          this.product.filterTopRated(this.customer.currentuser.user_id).subscribe((res)=>{
            this.filterItems = res;
            console.log(this.filterItems);
        });
        }
      },
      {
        text:translatedArray[3],
        role: 'Price',
        handler: () => {
          this.filter = true;
          this.flag = false;
          this.allflag=false;
          console.log('Cancel clicked');
          this.product.filterPrice(this.customer.currentuser.user_id).subscribe((res)=>{
            this.filterItems = res;
            console.log(this.filterItems);
        });
        }
      }
    ]
  });
 actionSheet.present();
}


presentActionSheet(){
  this.translateArray(
  ['New Arrivals',
  'Popularity',
  'Top rated',
  'Price']).subscribe((translatedArray)=>{
    this.presentSheet(translatedArray);
  });
}

  



public translateArray(words : string[])
{
let values = [];
for (let i = 0; i < words.length; i++) {
  this.common.translateservice.get(words[i]).subscribe(
    value => {
      // value is our translated string
      values.push(value);
    }
  );
}
return Observable.create((observer: Subscriber <any>) => {
  observer.next(values);
  observer.complete();
});
}
}
