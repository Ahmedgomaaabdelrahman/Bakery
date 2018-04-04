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
  public subcatUrl : string = MainProvider.baseUrl+"getsubcategory/";
  public subCatItemsUrl : string = MainProvider.baseUrl+"getitemswithsubcategory/";
  
  public tartOptionsUrl:string = MainProvider.baseUrl+"gettartoptions/";
  
  public getcartUrl : string = MainProvider.baseUrl+"getusercart/";
  public modifyUrl : string = MainProvider.baseUrl+"modifayqty/";
  public sliderofferUrl : string = MainProvider.baseUrl+"slideroffer?lang=";
  public otherOfferUrl : string = MainProvider.baseUrl+"otheroffer?lang=";

  public branchesUrl : string = MainProvider.baseUrl+"getallbranchesapi?lang=";
 
  public seacrhUrl:string = MainProvider.baseUrl+"serchforitem?lang=";

  public getAllFavsUrl : string = MainProvider.baseUrl+"getUserfavourite?lang=";
  public addFavUrl : string = MainProvider.baseUrl+"addTofavourite";
  public deleteFavUrl : string = MainProvider.baseUrl+"deleteItemFromFavourites";
  
  public getContactUrl : string = MainProvider.baseUrl+"getapicontacus?lang=";
  public socialmediaUrl : string = MainProvider.baseUrl+"socialmedia";
  public sendMessageUrl : string = MainProvider.baseUrl+"sendmessage";
  
  public addCartUrl : string = MainProvider.baseUrl+"addToCart/";
  public modifyQuanUrl : string = MainProvider.baseUrl+"modifayqty/";

  
  public aboutusUrl : string = MainProvider.baseUrl+"getaboutpolicy?lang=";


  public deleteCartUrl : string = MainProvider.baseUrl+"deleteItemFromCart/";
  public getMyLocationsUrl : string = MainProvider.baseUrl+"getMyLocations";
  public addLocationUrl : string = MainProvider.baseUrl+"addOrderLocation";
  public deleteLocationUrl : string = MainProvider.baseUrl+"deleteLocation";
  public makeOrderUrl : string = MainProvider.baseUrl+"insertorder?lang=";
  public HistoryUrl : string = MainProvider.baseUrl+"orderhistory/";
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

  About(){
    return this.http.get(this.aboutusUrl+MainProvider.lang).map((res) => res.json()); 
  }
  
  getContact(){
    return this.http.get(this.getContactUrl+MainProvider.lang).map((res) => res.json()); 
  }

  getsocialmedia(){
    return this.http.get(this.socialmediaUrl).map((res) => res.json()); 
  }
  
  getTartSize(){
    return this.http.get(this.TartSizeUrl).map((res) => res.json()); 
  }
  getTartAdds(){
    return this.http.get(this.TartAddsUrl+MainProvider.lang).map((res) => res.json()); 
  }

  sendContact(Message){ 
    let body = {
      Message  : Message  
    };
    return this.http.post(this.sendMessageUrl,body).map((res) => res.json());
  }
  
  getsubcat(id){
    return this.http.get(this.subcatUrl+id+"?lang="+MainProvider.lang).map((res) => res.json());
  }

  getsubitems(subid){
    return this.http.get(this.subCatItemsUrl+subid+"?lang="+MainProvider.lang).map((res) => res.json()); 
  }
  
  searchItem(keyword){ 
    let body = {
      KeyWord : keyword 
    };
    return this.http.post(this.seacrhUrl+MainProvider.lang,body).map((res) => res.json());
  }

  modifyQuan(cartid,modifyType){ 
    return this.http.get(this.modifyQuanUrl+cartid+"/"+modifyType).map((res) => res.json());
  }
 

  getTartOption(itemid){
    return this.http.get(this.tartOptionsUrl+itemid+"?lang="+MainProvider.lang).map((res) => res.json()); 
  }
  getUserCart(userid){
    return this.http.get(this.getcartUrl+userid+"?lang="+MainProvider.lang).map((res) => res.json()); 
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
    location_id : address,
    payment : payment
  };
  return this.http.post(this.makeOrderUrl+MainProvider.lang,user).map((res) => res.json());
 }
 
 getHistory(userid){
  return this.http.get(this.HistoryUrl+userid+"?lang="+MainProvider.lang).map((res) => res.json());
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

 addToCart( tartType:boolean, userid,subid,itemid,quanid,catid,tartsize?,tartcolor?:tartcolor[],tarttext?,tartimage?,tartadds?:tartadd[]){
   let body = {
    user_id:userid,
    item_id:itemid,
    quantity:quanid,
    Tart_size_id:tartsize,
    Tartcolor:tartcolor,
    tart_text:tarttext,
    tart_image:tartimage,
    Tartaddional:tartadds,
    category_id:catid,
    sub_category_id:subid,
    tart:tartType,
    state:"current",
    floors_id:1,
    tart_size_id:1,
    Tart_text:1,
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

//  getCart(userid){
//   let body = {
//    user_id:userid
//   };
//   return this.http.post(this.getCartUrl+MainProvider.lang,body).map((res) => res.json());
// }
delCartItem(cartid){
  return this.http.delete(this.deleteCartUrl+cartid).map((res) => res.json());
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
