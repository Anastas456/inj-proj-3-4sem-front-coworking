import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainHeaderComponent } from './shared/components/main-header/main-header.component';
import { SharedServiceService } from './shared/services/shared-service.service';
import { RentFormComponent } from './rent-form/rent-form.component';
import { FormsModule } from '@angular/forms';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { isLoggedIn } from './isLogged.guard';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { TextMaskModule } from 'angular2-text-mask';
import { HasRoleGuard } from './has-role.guard';
import { RolePipePipe } from './shared/pipes/role-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainHeaderComponent,
    RentFormComponent,
    AuthFormComponent,
    UserProfileComponent,
    RegistrationFormComponent,
    RolePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TextMaskModule
  ],
  providers: [SharedServiceService, isLoggedIn, HasRoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
