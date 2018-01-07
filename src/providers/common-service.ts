
import { HomePage } from './../pages/home/home';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {ActionSheetController,ModalController,AlertController} from "ionic-angular";
import {TranslateService} from "@ngx-translate/core";
import {Observable, Subscriber} from "rxjs";
import { ToastController, Nav } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

import { NativeStorage } from '@ionic-native/native-storage';
/*
  Generated class for the CommonServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonServiceProvider {

  constructor(public nativeStorage:NativeStorage,public camera :Camera,public alertCtrl :AlertController,public toastCtrl: ToastController,public translateservice:TranslateService,public modalCtrl :ModalController,public actionSheetCtrl: ActionSheetController,public http: Http) {
    console.log('Hello CommonServiceProvider Provider');
  }
  presentToast(msg : string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000
    });
    toast.present();
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

 createModel(pagename,parameters?){
   let modal = this.modalCtrl.create(pagename,parameters);
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


  galleryOrCamera() : Promise<any> {
    let promise = new Promise((resolve, reject )=> {
      let confirm = this.alertCtrl.create({
        title:  'Choose method',
        message: 'Choose picture from gallery or camera ?',
        buttons: [
          {
            text: 'Gallery',
            handler: () => {
              this.pickPicture().then((imageData)=>resolve(imageData)).catch((err) => reject(err));
            }
          },
          {
            text: 'Camera',
            handler: () => {
              this.takePicture().then((imageData)=>resolve(imageData)).catch((err) => reject(err));
            }
          }
        ]
      });
      confirm.present();
    });
    return promise ;

  }
  pickPicture() :Promise<any>{
    //noinspection TypeScriptUnresolvedVariable
    let promise = new Promise((resolve, reject )=> {
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        allowEdit: true,
        targetWidth: 1000,
        targetHeight: 1000
      }).then((imageData) => {
        // imageData is a base64 encoded string
        resolve(imageData);
      }, (err) => reject(err));
    });
    return promise ;
  }
  takePicture() :Promise<any>{
    let promise = new Promise((resolve, reject )=>{
      this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000,
        correctOrientation : true ,
      }).then((imageData) => {
        // imageData is a base64 encoded string
          resolve(imageData);
      }, (err) => reject(err));
    });
    return promise;

  }

}