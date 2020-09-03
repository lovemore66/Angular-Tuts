import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; //routing
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router'; //routing
import { HeaderComponent } from './header/header.component';
import { MainBodyComponent } from './main-body/main-body.component';
import { FootComponent } from './foot/foot.component';
import { LoginComponent } from './main-body/login/login.component';
import { SignupComponent } from './main-body/signup/signup.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { WarehousesComponent } from './warehouses/warehouses.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainBodyComponent,
    FootComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    HomeComponent,
    WarehousesComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    FormsModule,
    RouterModule.forRoot([
        
        {path: '', component: HomeComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'signup', component: SignupComponent},
        {path: 'login', component: LoginComponent},
        
        ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
