import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ActionSheetController,ModalController} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";
import {Observable, Subscriber} from "rxjs";
/*
  Generated class for the CommonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonServiceProvider {

  constructor(public translateservice:TranslateService,public modalCtrl :ModalController,public actionSheetCtrl: ActionSheetController,public http: Http) {
    console.log('Hello CommonServiceProvider Provider');
  }


  presentSheet(translatedArray : string[]) {
   let actionSheet = this.actionSheetCtrl.create({
    
     buttons: [
       {
         text:translatedArray[0],
         role: 'destructive',
         handler: () => {
           console.log('Destructive clicked');
         }
       },
       {
         text:translatedArray[1],
         handler: () => {
           console.log('Archive clicked');
         }
       },
       {
         text:translatedArray[2],
         role: 'Popularity',
         handler: () => {
           console.log('Cancel clicked');
         }
       },
       {
         text:translatedArray[3],
         role: 'Top',
         handler: () => {
           console.log('Cancel clicked');
         }
       },
       {
         text:translatedArray[4],
         role: 'Price',
         handler: () => {
           console.log('Cancel clicked');
         }
       }
     ]
   });
  actionSheet.present();
 }

 createModel(pagename){
   let modal = this.modalCtrl.create(pagename);
      modal.present();

 }  

 presentActionSheet(){
      this.translateArray(
      ['Best Match',
      'New Arrivals',
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
      this.translateservice.get(words[i]).subscribe(
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
