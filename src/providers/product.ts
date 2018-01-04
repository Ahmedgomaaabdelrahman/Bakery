import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainProvider } from './main';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductProvider {
  public getproductUrl : string = MainProvider.baseUrl+"getAllCategories/";
  public getAllitemsUrl : string = MainProvider.baseUrl+"getItems/";
  public getChosItemUrl : string = MainProvider.baseUrl+"getCategoryItems/";

  public getAllFavsUrl : string = MainProvider.baseUrl+"getUserfavourite/";
  public addFavUrl : string = MainProvider.baseUrl+"addTofavourite";
  public deleteFavUrl : string = MainProvider.baseUrl+"deleteItemFromFavourites";



  constructor(public http: Http) {
    console.log('Hello ProductProvider Provider');
  }


 getAllProducts(){
   return this.http.get(this.getproductUrl+MainProvider.lang).map((res) => res.json());
 } 

 getAllItems(userid){
  return this.http.get(this.getAllitemsUrl+userid+"/"+MainProvider.lang).map((res) => res.json());
} 
 getChosItem(userid,catid){
  return this.http.get(this.getChosItemUrl+MainProvider.lang+"/"+userid+"/"+catid).map((res) => res.json());
 }

 addtoFav(userid, itemid){
  let user = {
    user_id : userid,
    item_id : itemid
  };
  return this.http.put(this.addFavUrl,user).map((res) => res.json());
 }

 getAllFavs(userid){
  let user = {
    user_id : userid
  };
  return this.http.post(this.getAllFavsUrl+MainProvider.lang,user).map((res) => res.json());
 }
 deleteFavs(userid,itemid){
  let user = {
    user_id :  userid,
    item_id : itemid
  };
  return this.http.post(this.deleteFavUrl,user).map((res) => res.json());
 }
}
