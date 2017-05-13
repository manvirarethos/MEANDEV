import { Component ,AfterViewInit} from '@angular/core';
import {  AppGlobals} from '../Services/app.global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[AppGlobals]
})
export class AppComponent  {
  title = 'Node Angular 2 Demo';
  Login:Boolean;
  constructor(private appG: AppGlobals){
     this.appG.isUserLoggedIn.subscribe(value => this.Login = value);
  }
    
    UpdateMaster(IsCheck:boolean){
        this.Login=IsCheck;
    }
}
