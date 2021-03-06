import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AllComponent } from './components/cars/all/all.component';
import { OneComponent } from './components/cars/one/one.component';
import { FormComponent } from './components/cars/form/form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


import { AuthService } from './services/auth.service';
import {TokenService} from './services/token.service';
import {CarsService} from './services/cars.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    AllComponent,
    OneComponent,
    FormComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, TokenService, CarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
