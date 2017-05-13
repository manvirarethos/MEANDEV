import {  Component ,Output,EventEmitter ,AfterViewInit} from '@angular/core';
import {  AppGlobals} from '../../Services/app.global';
import {  Router,  ActivatedRoute} from '@angular/router';
import { correctHeight,  BindAll } from '../shared/app.helper';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',

   providers:[AppGlobals]
})
export class MasterComponent  implements  AfterViewInit {
  title = 'Node Angular 2 Demo';
  @Output() LogOut= new EventEmitter<boolean>();
  constructor(private appG: AppGlobals,private _route: ActivatedRoute,
        private _router: Router) {

  }

  SignOut() {
   console.log("Sign Out User");
   this.LogOut.emit(false);
 
  }
  ngAfterViewInit() {
        setTimeout(() => {
            correctHeight();
            BindAll();
        }, 3000)

    }
}
