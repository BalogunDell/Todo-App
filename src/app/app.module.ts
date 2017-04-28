import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddTaskPage } from '../pages/add-task/add-task';
import { TodoDetailsPage } from '../pages/todo-details/todo-details';
import { DataPage } from '../providers/data-page';
import { Storage } from '@ionic/storage';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddTaskPage,
    TodoDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddTaskPage,
    TodoDetailsPage
  ],
  providers: [,Storage, DataPage, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
