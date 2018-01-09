import { CustomerProvider } from './../../providers/customer';
import { MainProvider } from './../../providers/main';
import { CartPage } from './../cart/cart';
import { CommonServiceProvider } from './../../providers/common-service';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController, MenuController, ModalController, NavParams } from 'ionic-angular';
import { ProductProvider } from '../../providers/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allcats : any [] ;
  public allItems : any [];
  public specItems : any [];
  public flag : boolean ;
  public quan : boolean;
  public catid : any;
  public MainProvider = MainProvider;
  icons : any[] = [];
  quandiv : any [] = [];
  btnsdiv : any [] = [];
  defaultno:any = 1;
  public count2 = [];
  constructor(public modalCtrl :ModalController,public navParams: NavParams,public customer:CustomerProvider,public product:ProductProvider,public common:CommonServiceProvider, private menuCtrl:MenuController,public navCtrl: NavController) {

  }
  ionViewWillEnter() {
    console.log('ionViewDidLoad HomePAge');
    this.allItems = [];
    this.icons = [];
    this.quandiv = [];
    this.btnsdiv = [];
    this.allcats = [] ;
    this.allItems = [];
    this.specItems = [];

    this.product.getAllProducts().subscribe((res)=>{
      console.log(res);
      this.allcats = res;
    });

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
        this.count2.push(1);
    }}
    });
    
  this.catid = this.navParams.get('catid');
  if(this.catid){
   this.flag = true;
   this.product.getChosItem(this.customer.currentuser.user_id,this.catid).subscribe((res)=>{
     console.log(res);
      this.specItems = res;
   });

  }
  }
presentActionSheet(){
  this.common.presentActionSheet();
}
showDetails(images,name,details,quantity,itemid,catid){
 let detpage = this.modalCtrl.create(DetailsPage,{
    images : images , 
    name : name , 
    details : details , 
    quantity : quantity,
    itemid : itemid,
    catid : catid
  });
    console.log({images,name,details,quantity});
    detpage.present();
    detpage.onDidDismiss(data=>{
      this.flag = false;
    this.ionViewWillEnter();
    })
   

}
goCart(){
  this.navCtrl.push(CartPage);
  this.flag = false;
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
  this.flag = true;
  this.product.getChosItem(this.customer.currentuser.user_id,catid).subscribe((res)=>{
    console.log(res);
     this.specItems = res;
  })
}

addToCart(i,itemid,quanid,catid){
  console.log(i);
  this.product.addToCart(this.customer.currentuser.user_id,itemid,quanid,catid).subscribe((res)=>{
    console.log(res);
    // document.getElementById('no').textContent="1";
    if(res == 1){
      this.common.presentToast("this item already added");
      
    }
    else{
      this.common.presentToast("Added Successfully");
      this.quandiv[i]='quandiv';
      this.btnsdiv[i]='disbtn';
    }
  })
}

addToFav(itemid,icon){
  this.product.addtoFav(this.customer.currentuser.user_id,itemid).subscribe((res)=>{
    console.log(res);
    if(res == false){
      this.common.presentToast("this item already added");
    }
    else if(res == true){
      this.common.presentToast("Added Successfully");
      this.icons[icon]='heart';
    }
  })
}

increaseQuan(i,quanno1:any,itemid,catid){
  this.count2[i]++;
  
  this.product.addToCart(this.customer.currentuser.user_id,itemid,quanno1.value,catid).subscribe((res)=>{
    console.log(res);
  });
}
decreaseQuan(quanno,i){
  if(quanno.value > 0){
    quanno.value--;
    
  }
 
}
}
