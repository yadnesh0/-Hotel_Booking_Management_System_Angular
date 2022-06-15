import { prepareSyntheticListenerName } from '@angular/compiler/src/render3/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAdminComponent } from './Components/admin-dashboard/add-admin/add-admin.component';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { UpdateAdminComponent } from './Components/admin-dashboard/update-admin/update-admin.component';
import { ViewAdminsComponent } from './Components/admin-dashboard/view-admins/view-admins.component';
import { AddBookingComponent } from './Components/booking/add-booking/add-booking.component';
import { MakePaymentComponent } from './Components/booking/make-payment/make-payment.component';
import { SelectRoomComponent } from './Components/booking/select-room/select-room.component';
import { ShowHotelsComponent } from './Components/booking/show-hotels/show-hotels.component';
import { ViewBookingComponent } from './Components/booking/view-booking/view-booking.component';
import { UpdateUserComponent } from './Components/customer/update-user/update-user.component';
import { UserBookingComponent } from './Components/customer/user-booking/user-booking.component';
import { UserPaymentComponent } from './Components/customer/user-payment/user-payment.component';
import { UserProfileComponent } from './Components/customer/user-profile/user-profile.component';
import { AddHotelComponent } from './Components/hotel/add-hotel/add-hotel.component';
import { UpdateHotelComponent } from './Components/hotel/update-hotel/update-hotel.component';
import { ViewHotelComponent } from './Components/hotel/view-hotel/view-hotel.component';
import { ViewPaymentComponent } from './Components/payment/view-payment/view-payment.component';
import { AddRoomComponent } from './Components/room/add-room/add-room.component';
import { UpdateRoomComponent } from './Components/room/update-room/update-room.component';
import { ViewRoomComponent } from './Components/room/view-room/view-room.component';
import { WelcomeComponent } from './Components/welcome/welcome.component';
import { HomeComponent } from './Pages/home/home.component';
import { ForgotPasswordAdminComponent } from './Pages/login/forgot-password-admin/forgot-password-admin.component';
import { LoginComponent } from './Pages/login/login.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import { SignupComponent } from './Pages/signup/signup.component';
import { ForgotPasswordUserComponent } from './Pages/user-login/forgot-password-user/forgot-password-user.component';
import { UserLoginComponent } from './Pages/user-login/user-login.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  { 
    path:'home',
    component:HomeComponent,
    pathMatch:'full'
  },
  { 
    path:'register',
    component:SignupComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:UserLoginComponent,
    pathMatch:'full'
  },
  {
    path:'admin',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'adminReset',
    component:ForgotPasswordAdminComponent,
  },
  {
    path:'adminDash',
    component:AdminDashboardComponent,
    children:[
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'addAdmin',
        component:AddAdminComponent
      },
      {
        path:'updateAdmin',
        component:UpdateAdminComponent
      },
      {
        path:'viewAdmins',
        component:ViewAdminsComponent
      },
      {
        path:'hotelAdd',
        component:AddHotelComponent
      },
      {
        path:'viewhotel',
        component:ViewHotelComponent
      },
      {
        path:'hotelUpdate',
        component:UpdateHotelComponent
      },
      {
        path:'viewroom',
        component:ViewRoomComponent
      },
      {
        path:'roomAdd',
        component:AddRoomComponent
      },
      {
        path:'roomUpdate',
        component:UpdateRoomComponent
      },
      {
        path:'viewbooking',
        component:ViewBookingComponent
      },
      {
        path:'viewpayment',
        component:ViewPaymentComponent
      },
     ]
   },
   {
     path:'welcome',
     component:WelcomeComponent,
     children:[
       {
         path:'profile',
         component:UserProfileComponent
        },
        {
          path:'updateUser',
          component:UpdateUserComponent
         },
        {
          path:'userReset',
          component:ForgotPasswordUserComponent
         },
         {
          path:'bookings',
          component:UserBookingComponent
         },
         {
          path:'payments',
          component:UserPaymentComponent
         }
     ]
    },
    {
      path:'hotels',
      component:ShowHotelsComponent
     },
     {
      path:'rooms',
      component:SelectRoomComponent
     },
     {
      path:'addBooking',
      component:AddBookingComponent
     },
     {
      path:'makePayment',
      component:MakePaymentComponent
     },
   
  {path:'**',component:PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
