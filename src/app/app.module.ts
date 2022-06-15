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
import { AddHotelComponent } from './Components/hotel/add-hotel/add-hotel.component';
import { ViewHotelComponent } from './Components/hotel/view-hotel/view-hotel.component';
import { ProfileComponent } from './Pages/profile/profile.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatTabsModule} from '@angular/material/tabs';
import { SidebarComponent } from './Components/admin-dashboard/sidebar/sidebar.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ViewRoomComponent } from './Components/room/view-room/view-room.component';
import { YesNoPipe } from './Components/room/yes-no.pipe';
import { ViewBookingComponent } from './Components/booking/view-booking/view-booking.component';
import { AddBookingComponent } from './Components/booking/add-booking/add-booking.component';
import { AddPaymentComponent } from './Components/payment/add-payment/add-payment.component';
import { AddTransactionComponent } from './Components/payment/add-transaction/add-transaction.component';
import { ViewPaymentComponent } from './Components/payment/view-payment/view-payment.component';
import { UserDashboardComponent } from './Components/customer/user-dashboard/user-dashboard.component';
import { ShowHotelsComponent } from './Components/booking/show-hotels/show-hotels.component';
import { BookingService } from './services/booking.service';
import { HotelService } from './services/hotel.service';
import { RoomService } from './services/room.service';
import { AddRoomComponent } from './Components/room/add-room/add-room.component';
import { UpdateRoomComponent } from './Components/room/update-room/update-room.component';
import { UserProfileComponent } from './Components/customer/user-profile/user-profile.component';
import { UserBookingComponent } from './Components/customer/user-booking/user-booking.component';
import { UserPaymentComponent } from './Components/customer/user-payment/user-payment.component';
import { SelectRoomComponent } from './Components/booking/select-room/select-room.component';
import { MakePaymentComponent } from './Components/booking/make-payment/make-payment.component';
import { UpdateHotelComponent } from './Components/hotel/update-hotel/update-hotel.component';
import { UpdateAdminComponent } from './Components/admin-dashboard/update-admin/update-admin.component';
import { UpdateUserComponent } from './Components/customer/update-user/update-user.component';


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
    ViewAdminsComponent,
    AddHotelComponent,
    ViewHotelComponent,
    ProfileComponent,
    SidebarComponent,
    NavbarComponent,
    ViewRoomComponent,
    YesNoPipe,
    ViewBookingComponent,
    AddBookingComponent,
    AddPaymentComponent,
    AddTransactionComponent,
    ViewPaymentComponent,
    UserDashboardComponent,
    ShowHotelsComponent,
    AddRoomComponent,
    UpdateRoomComponent,
    UserProfileComponent,
    UserBookingComponent,
    UserPaymentComponent,
    SelectRoomComponent,
    MakePaymentComponent,
    UpdateHotelComponent,
    UpdateAdminComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatExpansionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatTabsModule,
    MatNativeDateModule 
  ],
  providers: [UserService,
              AdminService,
              HotelService,
              RoomService,
              BookingService
             ],
  bootstrap: [AppComponent]
})
export class AppModule { }
