import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TodoDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-todo-details',
  templateUrl: 'todo-details.html'
})
export class TodoDetailsPage {

	public todoTitle;
	public todoDescription;
	public todoStartDate;
	public todoEndDate;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
   this.todoTitle = this.navParams.get('item').todoTitle;
   this.todoDescription = this.navParams.get('item').todoDescription;
   this.todoStartDate = this.navParams.get('item').todoStartDate;
   this.todoEndDate = this.navParams.get('item').todoEndDate;

  }

}
