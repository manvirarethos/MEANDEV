import {  Component} from '@angular/core';
import {  AppGlobals} from '../../Services/app.global';
import {  Router,  ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',

   providers:[AppGlobals]
})
export class MasterComponent {
  title = 'Node Angular 2 Demo';
  IsLogin: Boolean = false;
  constructor(private appG: AppGlobals,private _route: ActivatedRoute,
        private _router: Router) {

  }

  logOut() {
    console.log("AAAAAAAAAAAA");
    this.appG.setLoginStatus(false);
  this._router.navigate(['login']);
  }

}
