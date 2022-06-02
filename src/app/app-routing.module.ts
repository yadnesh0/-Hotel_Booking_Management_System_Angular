import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './Components/admin-dashboard/add-admin/add-admin.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { ViewAdminsComponent } from './Components/admin-dashboard/view-admins/view-admins.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { HomeComponent } from './Pages/home/home.component';
import { ForgotPasswordAdminComponent } from './Pages/login/forgot-password-admin/forgot-password-admin.component';
import { LoginComponent } from './Pages/login/login.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { ForgotPasswordUserComponent } from './Pages/user-login/forgot-password-user/forgot-password-user.component';
import { UserLoginComponent } from './Pages/user-login/user-login.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'register',component:SignupComponent},
  {path:'login',component:UserLoginComponent},
  {path:'userReset',component:ForgotPasswordUserComponent},
  {path:'welcome',component:WelcomeComponent},
  {path:'admin',component:LoginComponent},
  {path:'adminReset',component:ForgotPasswordAdminComponent},
  {path:'adminDash',component:AdminDashboardComponent},
  {path:'addAdmin',component:AddAdminComponent},
  {path:'viewAdmins',component:ViewAdminsComponent},
  {path:'**',component:PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
