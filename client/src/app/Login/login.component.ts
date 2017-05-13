import {  Component ,EventEmitter,Output} from '@angular/core';
import {  AppGlobals} from '../../Services/app.global';
import {  Router,  ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: ['./login.css'],
  providers: [AppGlobals]
})
export class LoginComponent {
  title = 'Node Angular 2 Demo';
  @Output() CheckLogin= new EventEmitter<boolean>();
  constructor(private appG: AppGlobals, private _route: ActivatedRoute, private _router: Router) {

  }

  LoginMe() {
  this.CheckLogin.emit(true);
  }

}
