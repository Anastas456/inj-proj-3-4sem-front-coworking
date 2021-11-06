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


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainHeaderComponent,
    RentFormComponent,
    AuthFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SharedServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
