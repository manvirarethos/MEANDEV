import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptions, URLSearchParams } from '@angular/http';

import { CurrentUser } from '../DataModel/LoginResponse';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

@Injectable()
export class LoginService {
    private loginUrl = "/api/account/";
    private headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    lastHitTime = new Date();
    public userType: number;
    isLoggedIn: boolean = false;
    private authTokenName: string = 'X-AUTH-TOKEN';
    public LogedUserType: string;
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(private http: Http) { }

    getAuthTokenName(): string {
        return this.authTokenName;
    }

   /* getAuthToken(): string {
     //   return this.locker.get(this.authTokenName);
    }*/

    refreshAuthenticity() {
      /*  if (this.locker.has(this.authTokenName)) {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }*/
    }

    isLoggedInAfterAuthenticityRefresh() {
        this.refreshAuthenticity();
        return this.isLoggedIn;
    }


    login(credentials: any): Observable<any> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('username', credentials.username);
        params.set('password', credentials.password);

        let options = new RequestOptions({ headers: this.headers });
        return Observable.of('abc');
       /* return this.http.post(this.loginUrl, params, { headers: this.headers }).map((response: Response) =>
        { 
            var User=  <CurrentUser>response.json();
            this.isLoggedIn = true;
            var authToken = User.token;
         //   this.locker.set(this.authTokenName, authToken);
            response.json();
        });*/
    }

    logout(): void {
        this.isLoggedIn = false;
       // this.locker.remove(this.authTokenName);
      //  this.locker.remove("MyMenu");
       // this.locker.remove("UserType");
        
    }

}


  