import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, AlertController } from 'ionic-angular';

/*
  Generated class for the AddTask page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html'
})
export class AddTaskPage {

	todoTitle;
	todoDescription;
	todoStartDate;
	todoEndDate;
  todoStatus = "not Set";
  todoDuration: string;
  todoDays;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ViewCtrl: ViewController, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTaskPage');
  }

//This function saves the values entered from the modal
  SaveTodo(){
      let newTodoList = {
      todoTitle: this.todoTitle,
      todoDescription: this.todoDescription,
      todoStartDate: this.todoStartDate,
      todoEndDate: this.todoEndDate,
      todoStatus: this.todoStatus
      }

      if(newTodoList.todoTitle == undefined){
        let error_message= 'Enter a title';
        this.NotifyOnError(error_message);
        
      }else{

          if(newTodoList.todoTitle.length < 3){
              let error_message= 'Title too short';
              this.NotifyOnError(error_message);
          }else{
              if(newTodoList.todoDescription == undefined){
                let error_message= 'Give a little description of this task';
                this.NotifyOnError(error_message);
              
              }else{

                  if(newTodoList.todoDescription.length < 10){
                      let error_message= 'Description is too short, Should not be less than 10 characters';
                      this.NotifyOnError(error_message);
                      //console.log("Description is too short");
                  }else{

                      if(newTodoList.todoStartDate == undefined){
                      newTodoList.todoStartDate = "Not Set";
                      }
                      console.log(newTodoList);
                     this.ViewCtrl.dismiss(newTodoList);
                  }
              }
          }

      }

}
 close(){
 this.ViewCtrl.dismiss();
 }

 NotifyOnError(error_message){
  let notifyCtrl = this.alertCtrl.create({
    title:"Value Error",
    message: error_message,
    enableBackdropDismiss: false,
    buttons: ['OK']
 });
 notifyCtrl.present();

 }
 

}
