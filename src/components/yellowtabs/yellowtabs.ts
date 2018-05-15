import { CommonServiceProvider } from './../../providers/common-service';
import { ContactusPage } from './../../pages/contactus/contactus';
import { CategoryPage } from './../../pages/category/category';
import { FavoritePage } from './../../pages/favorite/favorite';
import { Component } from '@angular/core';
import { NavController, App} from 'ionic-angular';
import { CustomerProvider } from '../../providers/customer';
import { LoginPage } from '../../pages/login/login';


@Component({
  selector: 'yellowtabs',
  templateUrl: 'yellowtabs.html'
})
export class YellowtabsComponent {

  text: string;

  constructor(public common:CommonServiceProvider,public _app:App,public navCtrl: NavController,public customer:CustomerProvider) {
    console.log('Hello YellowtabsComponent Component');
    this.text = 'Hello World';
  }

  gofav(){
    if(this.customer.currentuser){
      this.navCtrl.push(FavoritePage);
    }
    else{
      this.common.presentToast('you should login');
      this._app.getRootNav().setRoot(LoginPage);
    }
  
  }
  gocat(){
    this.navCtrl.push(CategoryPage);
  }
  gocontact(){
    this.navCtrl.push(ContactusPage);
  }
}
