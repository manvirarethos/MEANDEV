import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { MasterComponent } from './master/master.component';


@NgModule({
  declarations: [
        AppComponent,
        LoginComponent,      
        MasterComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([ 
    
     
    ]),
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
