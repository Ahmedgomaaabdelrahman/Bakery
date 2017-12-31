import { MainProvider } from './../../providers/main';
import { CartPage } from './../cart/cart';
import { CommonServiceProvider } from './../../providers/common-service';
import { DetailsPage } from './../details/details';
import { Component } from '@angular/core';
import { NavController ,MenuController,ModalController} from 'ionic-angular';
import { ProductProvider } from '../../providers/product';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public allcats : any [] ;
  public MainProvider = MainProvider;
  constructor(public product:ProductProvider,public common:CommonServiceProvider, private menuCtrl:MenuController,public navCtrl: NavController) {
           this.product.getAllProducts().subscribe((res)=>{
             console.log(res);
             this.allcats = res;
             
           });
  }
presentActionSheet(){
  this.common.presentActionSheet();
}
showDetails(){
  this.common.createModel(DetailsPage);
}
goCart(){
  this.common.createModel(CartPage);
}

}
