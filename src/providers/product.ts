import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainProvider } from './main';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { tartadd } from './tartadd';
import { tartcolor } from './tartcolor';


@Injectable()
export class ProductProvider {
  public getproductUrl : string = MainProvider.baseUrl+"getAllCategories?lang=";
  public getAllitemsUrl : string = MainProvider.baseUrl+"getItems/";
  public getChosItemUrl : string = MainProvider.baseUrl+"getCategoryItems";


  public sliderofferUrl : string = MainProvider.baseUrl+"slideroffer?lang=";
  public otherOfferUrl : string = MainProvider.baseUrl+"otheroffer?lang=";

  public branchesUrl : string = MainProvider.baseUrl+"getallbranchesapi?lang=";

  public getAllFavsUrl : string = MainProvider.baseUrl+"getUserfavourite?lang=";
  public addFavUrl : string = MainProvider.baseUrl+"addTofavourite";
  public deleteFavUrl : string = MainProvider.baseUrl+"deleteItemFromFavourites";
  
  public addCartUrl : string = MainProvider.baseUrl+"addToCart/";
  public getCartUrl : string = MainProvider.baseUrl+"getMyCart?lang=";
  public deleteCartUrl : string = MainProvider.baseUrl+"deleteItemFromCart";
  public getMyLocationsUrl : string = MainProvider.baseUrl+"getMyLocations";
  public addLocationUrl : string = MainProvider.baseUrl+"addOrderLocation";
  public deleteLocationUrl : string = MainProvider.baseUrl+"deleteLocation";
  public makeOrderUrl : string = MainProvider.baseUrl+"makeOrder";
  public HistoryUrl : string = MainProvider.baseUrl+"getCustomerHistory?lang=";
  public cancelOrderUrl : string = MainProvider.baseUrl+"cancelOrder";
  public getItemFromCartUrl : string = MainProvider.baseUrl+"getItemFromCart";
  public addItemRateUrl : string = MainProvider.baseUrl+"addItemRate";
  public totpopularUrl : string = MainProvider.baseUrl+"popularetiFilter/";
  public catpopularUrl : string = MainProvider.baseUrl+"popularetiFilter/";
  public priceCatUrl : string = MainProvider.baseUrl+"priceFilterCategory/";
  public priceUrl : string = MainProvider.baseUrl+"priceFilter/";
  public newArrivalUrl : string = MainProvider.baseUrl+"newArravalFilter/";
  public newArrivalCatUrl : string = MainProvider.baseUrl+"newArravalFilterCategory/";
  public TopRatedUrl : string = MainProvider.baseUrl+"topRated/";
  public TartColorUrl : string = MainProvider.baseUrl+"getTartColor";
  public TartSizeUrl : string = MainProvider.baseUrl+"getTartSize";
  public TartAddsUrl : string = MainProvider.baseUrl+"getTartAdds?lang=";

  constructor(public http: Http) {
    console.log('Hello ProductProvider Provider');
  }
  
  getTartColor(){
    return this.http.get(this.TartColorUrl).map((res) => res.json()); 
  }
  getTartSize(){
    return this.http.get(this.TartSizeUrl).map((res) => res.json()); 
  }
  getTartAdds(){
    return this.http.get(this.TartAddsUrl+MainProvider.lang).map((res) => res.json()); 
  }
 

  filterPopular(userid){
    return this.http.get(this.totpopularUrl+MainProvider.lang+"/"+userid).map((res) => res.json()); 
  }

  filterTopRated(userid){
    return this.http.get(this.TopRatedUrl+MainProvider.lang+"/"+userid).map((res) => res.json()); 
  }

  filterCatPopular(catid){
    return this.http.get(this.catpopularUrl+MainProvider.lang+"/"+catid).map((res) => res.json()); 
  }

  filterPrice(userid){
    return this.http.get(this.priceUrl+MainProvider.lang+"/"+userid).map((res) => res.json()); 
  }

  filterCatPrice(catid){
    return this.http.get(this.priceCatUrl+MainProvider.lang+"/"+catid).map((res) => res.json()); 
  }

  filternewArrival(userid){
    return this.http.get(this.newArrivalUrl+MainProvider.lang+"/"+userid).map((res) => res.json()); 
  }

  filternewArrivalCat(catid){
    return this.http.get(this.newArrivalCatUrl+MainProvider.lang+"/"+catid).map((res) => res.json()); 
  }

  addRateItem(itemid , itemrate){
    let user = {
      item_id : itemid ,
      item_rate_no: itemrate
    };
    return this.http.post(this.addItemRateUrl,user).map((res) => res.json());
  }

 getAllProducts(){
   return this.http.get(this.getproductUrl+MainProvider.lang).map((res) => res.json());
 } 

 getAllItems(userid){
  return this.http.get(this.getAllitemsUrl+userid+"?lang="+MainProvider.lang).map((res) => res.json());
} 
 getChosItem(userid,catid){
  return this.http.get(this.getChosItemUrl+"/"+userid+"/"+catid+"?lang="+MainProvider.lang).map((res) => res.json());
 }

 addtoFav(userid, itemid){
  let user = {
    user_id : userid,
    item_id : itemid
  };
  return this.http.put(this.addFavUrl,user).map((res) => res.json());
 }
 
 makeOrder(userid , total , address , payment){
  let user = {
    user_id : userid ,
    total_price : total ,
    address : address,
    payment_method : payment
  };
  return this.http.post(this.makeOrderUrl,user).map((res) => res.json());
 }
 
 getHistory(userid){
  let user = {
    user_id : userid 
  };
  return this.http.post(this.HistoryUrl+MainProvider.lang,user).map((res) => res.json());
 }


 cancelOrder(userid , order_id){
  let user = {
    user_id : userid ,
    order_id : order_id 
  };
  return this.http.post(this.cancelOrderUrl,user).map((res) => res.json());
 }


 getItemFromCart(user_id , item_id){
  let user = {
    user_id : user_id,
    item_id : item_id
  };
  return this.http.post(this.getItemFromCartUrl,user).map((res) => res.json());
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

 addToCart(userid,itemid,quanid,catid,tartsize?,tartcolor?:tartcolor[],tarttext?,tartimage?,tartadds?:tartadd[]){
   let body = {
    user_id:userid,
    item_id:itemid,
    quantity:quanid,
    Category_id:catid,
    Tart_size_id:tartsize,
    tart_color:tartcolor,
    tart_text:tarttext,
    tart_image:tartimage,
    tart_additonals:tartadds

   };

// try{ this.http.post(this.addCartUrl,body).map((res) =>
//   { 
//   res.json()
// });}catch(e){
//   console.log(e)
  
// }
  
 console.log("Body",body);

   return this.http.post(this.addCartUrl,body).map((res) => res.json());
 }

 getCart(userid){
  let body = {
   user_id:userid
  };
  return this.http.post(this.getCartUrl+MainProvider.lang,body).map((res) => res.json());
}
delCartItem(userid,itemid){
  let user = {
    user_id :  userid,
    item_id : itemid
  };
  return this.http.post(this.deleteCartUrl,user).map((res) => res.json());
}

addLocation(label,uid,lat,lng){
  let body={
    location_label:label,
    user_id:uid,
    lat:lat,
    lng:lng
  }
  return this.http.put(this.addLocationUrl,body).map((res) => res.json());
}
getLocations(uid){
  let body={
    user_id:uid 
  }
  return this.http.post(this.getMyLocationsUrl,body).map((res)=> res.json());
}
deleteLocations(locationid){
  let body={
    location_id:locationid 
  }
  return this.http.post(this.deleteLocationUrl,body).map((res)=> res.json());
}


getsliderOffer(){
  return this.http.get(this.sliderofferUrl+MainProvider.lang).map((res) => res.json()); 
}

getOtherOffer(){
  return this.http.get(this.otherOfferUrl+MainProvider.lang).map((res) => res.json()); 
}
getallBranches(){
  return this.http.get(this.branchesUrl+MainProvider.lang).map((res) => res.json()); 
}
}
