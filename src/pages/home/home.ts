import { Component } from '@angular/core';

import { NavController, ModalController, NavParams , AlertController } from 'ionic-angular';
import { AddTaskPage } from '../add-task/add-task';
import { TodoDetailsPage } from '../todo-details/todo-details';
import { DataPage } from '../../providers/data-page';
//import { LocalNotifications } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	public TodoList = [];
	todoStatus:boolean;
	status: string;

  constructor(public navCtrl: NavController , public modalCtrl: ModalController, public Navpams: NavParams, private dbase: DataPage , public AllCtrl: AlertController) {

  	this.dbase.getData().then((ListofTasks) =>{
  		if(ListofTasks){
  		this.TodoList = JSON.parse(ListofTasks);
  		//console.log(this.TodoList);
  		}else
  		{
  		
  		}

  	});
    
  }


ionViewDidLoad(){
}


	AddTask(){
	let TodoModal = this.modalCtrl.create(AddTaskPage);
	TodoModal.onDidDismiss((item) => {
		if(item){
			this.SaveTask(item);
		}
			
	});

	TodoModal.present();
	}

	SaveTask(item){
	this.TodoList.unshift(item);
	this.dbase.save(this.TodoList);
	}


	ViewDetails(item){
	this.navCtrl.push(TodoDetailsPage, {
	item: item
	});
	}


	DeleteTask(selectedTask){
		let DeleteAllCtrl = this.AllCtrl.create({
		title: "This is Important!",
		message: "This action will delete this task, do you want to continue?",
		buttons:[
			{
				text: 'Yes',
				role: 'Yes',
				handler: () =>{
				this.TodoList.splice(this.TodoList.indexOf(selectedTask), 1);
				this.dbase.save(this.TodoList);

						

				}
			},

			{
				text: 'Cancel',
				role: 'Cancel',
				handler: () => {
				DeleteAllCtrl.dismiss();
				}

			}
		]

		});

		DeleteAllCtrl.present();

	}


	Edit(SelectedTodo){
	let editPane = this.AllCtrl.create({
			title: 'Change todo Status',
			enableBackdropDismiss: false,
			inputs: [
				{
					type: 'radio',
					label: 'In progress',
					value: 'In Progress'
				},

				{
					type: 'radio',
					label: "Completed",
					value: 'Completed'

				}


			],
			buttons:[

				{ 
					text: 'Save',
					role: 'Save',
					handler: resp => {
					
						let todoIndex = this.TodoList.indexOf(SelectedTodo);
						this.TodoList[todoIndex].todoStatus = resp;
						this.dbase.save(this.TodoList);
					}

				},

				{
					text: 'Cancel',
					role: 'Cancel',
					handler: resp => {
						if(resp === undefined){
						let todoIndex = this.TodoList.indexOf(SelectedTodo);
						this.TodoList[todoIndex].todoStatus = this.TodoList[todoIndex].todoStatus;
						this.dbase.save(this.TodoList);
						editPane.dismiss();
						}else{
						let todoIndex = this.TodoList.indexOf(SelectedTodo);
						this.TodoList[todoIndex].todoStatus = 'Not set';
						this.dbase.save(this.TodoList);
						editPane.dismiss();
						}
					
					}

				}
			]

		});

	editPane.present();
	}
	
}
