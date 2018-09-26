import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { AddproductComponent } from './admin/addproduct/addproduct.component';
import { ManageproductComponent } from './admin/manageproduct/manageproduct.component';
import {environment} from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { ManagesalesComponent } from './admin/managesales/managesales.component';
import { ManagesuplyComponent } from './admin/managesuply/managesuply.component';
import { AddsupplyComponent } from './admin/addsupply/addsupply.component';
import { ExpensesComponent } from './admin/expenses/expenses.component';
import { AddExpensesComponent } from './admin/add-expenses/add-expenses.component';
import { HomeComponent } from './home/home.component';

const routes:Routes = [
  {path : 'admin/login',component: LoginComponent},
  {path : 'admin/addproduct',component: AddproductComponent},
  {path : 'admin/manageproduct',component: ManageproductComponent},
  {path : 'admin/navbar',component: NavbarComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddproductComponent,
    ManageproductComponent,
    LoginComponent,
    DashboardComponent,
    ManagesalesComponent,
    ManagesuplyComponent,
    AddsupplyComponent,
    ExpensesComponent,
    AddExpensesComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
