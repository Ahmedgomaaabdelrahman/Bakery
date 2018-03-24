import { ContactusPage } from './../../pages/contactus/contactus';
import { CategoryPage } from './../../pages/category/category';
import { FavoritePage } from './../../pages/favorite/favorite';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'yellowtabs',
  templateUrl: 'yellowtabs.html'
})
export class YellowtabsComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello YellowtabsComponent Component');
    this.text = 'Hello World';
  }

  gofav(){
    this.navCtrl.push(FavoritePage);
  }
  gocat(){
    this.navCtrl.push(CategoryPage);
  }
  gocontact(){
    this.navCtrl.push(ContactusPage);
  }
}
