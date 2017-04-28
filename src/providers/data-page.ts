import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the DataPage provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DataPage {

  constructor(public Db: Storage) {

  }

  getData(){
    	return this.Db.get('ListofTasks');
    }

   save(data){
   let newData = JSON.stringify(data); //stringify the resoponse from the promise getdata
   this.Db.set('ListofTasks' , newData);

   }

   removeData(){
   return this.Db.clear();
   //console.log("cleared");
   }

}
