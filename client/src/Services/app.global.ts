import {Injectable} from '@angular/core'
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import 'rxjs/add/operator/startWith';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable() 
export class AppGlobals {
// use this property for property binding
  public isUserLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  public setLoginStatus(isLoggedIn){
   this.isUserLoggedIn.next(isLoggedIn);
  }
}