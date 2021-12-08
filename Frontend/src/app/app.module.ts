import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TabModule } from '@syncfusion/ej2-angular-navigations';
import { DialogModule } from '@syncfusion/ej2-angular-popups';

import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SidbarComponent } from './components/sidbar/sidbar.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes,RouterModule } from '@angular/router';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { WorksComponent } from './works/works.component';
import { SubworkComponent } from './components/subwork/subwork.component';
import { LeassensComponent } from './components/leassens/leassens.component';
import { PdfReaderComponent } from './components/pdf-reader/pdf-reader.component';
const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate:[BeforeLoginService]
  },{
    path: '',
    component: LoginComponent,
    canActivate:[BeforeLoginService]
  },{
    path: 'signup',
    component: SignupComponent,
    canActivate:[BeforeLoginService]
  },{
    path: 'profile',
    component: ProfileComponent,
    canActivate:[AfterLoginService]
  },{
    path: 'leassens',
    component: LeassensComponent,
    canActivate:[AfterLoginService]
  },{
    path: 'works',
    component: WorksComponent,
    canActivate:[AfterLoginService]
  },{
    path: 'pdfreader/:id',
    component: PdfReaderComponent,
    canActivate:[AfterLoginService]
  },{
    path: 'subwork/:id',
    component: SubworkComponent,
    canActivate:[AfterLoginService]
  },{
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate:[BeforeLoginService]
  },{
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate:[BeforeLoginService]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    SidbarComponent,
    RequestResetComponent,
    ResponseResetComponent,
    WorksComponent,
    SubworkComponent,
    LeassensComponent,
    PdfReaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    SnotifyModule,
    TabModule,
    DialogModule
  ],
  providers: [     { provide: 'SnotifyToastConfig', useValue: ToastDefaults},
    SnotifyService
],
  bootstrap: [AppComponent]
})
export class AppModule { }
