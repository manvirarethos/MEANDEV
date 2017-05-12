import { Component } from '@angular/core';
import { AppGlobals } from '../../Services/app.global';
import {  Router,  ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles:['./login.css'],
   providers:[AppGlobals]
})
export class LoginComponent {
  title = 'Node Angular 2 Demo';
  constructor(private appG:AppGlobals,private _route: ActivatedRoute, private _router: Router)
  {
  
  }
 
 LoginMe()
 {
   console.log("AAAAAAAAAAAA");
    this.appG.setLoginStatus(true); 
  this._router.navigate(['/']);
 }

}
