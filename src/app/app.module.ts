import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { SignupComponent } from './Pages/signup/signup.component';

import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UserLoginComponent } from './Pages/user-login/user-login.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { ForgotPasswordAdminComponent } from './Pages/login/forgot-password-admin/forgot-password-admin.component';
import { ForgotPasswordUserComponent } from './Pages/user-login/forgot-password-user/forgot-password-user.component';
import { AddAdminComponent } from './Components/admin-dashboard/add-admin/add-admin.component';
import { UserService } from './services/user.service';
import { AdminService } from './services/admin.service';
import { ViewAdminsComponent } from './Components/admin-dashboard/view-admins/view-admins.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignupComponent,
    PageNotFoundComponent,
    AdminDashboardComponent,
    UserLoginComponent,
    WelcomeComponent,
    ForgotPasswordAdminComponent,
    ForgotPasswordUserComponent,
    AddAdminComponent,
    ViewAdminsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [UserService,
              AdminService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
