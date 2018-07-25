import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

// Import containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

// Import routing module

// Import 3rd party components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { WikiComponent } from './views/theme/wiki.component';
import { AppRoutingModule } from './app-routing.module';
import { AddWikiComponent } from './view/add-wiki/add-wiki.component';
import { HomeComponent } from './view/home/home.component';

import { FormsModule} from '@angular/forms';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseService } from './firebase.service';
import { RouterModule } from '../../node_modules/@angular/router';
import { TextMaskModule } from '../../node_modules/angular2-text-mask';
import { AdvancedFormsRoutingModule } from './views/forms/advanced-forms/advanced-forms-routing.module';
import { TimepickerModule, BsDatepickerModule } from '../../node_modules/ngx-bootstrap';
import { SelectModule } from '../../node_modules/ng-select';
import { FormComponent } from './view/form/form.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AppAsideModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    AngularFireModule.initializeApp({apiKey: "AIzaSyChaepxxa_e96coIkyQA9P4YEFKUqU3E_M",
    authDomain: "ethereal-accord-193810.firebaseapp.com",
    databaseURL: "https://ethereal-accord-193810.firebaseio.com",
    projectId: "ethereal-accord-193810",
    storageBucket: "ethereal-accord-193810.appspot.com",
    messagingSenderId: "344959569062"}),
    AngularFireDatabaseModule,
    TabsModule.forRoot(),
    ChartsModule,
    RouterModule,
    TextMaskModule,
    TimepickerModule.forRoot(),
    BsDatepickerModule.forRoot(),

    SelectModule
    
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    P404Component,
    P500Component,
    LoginComponent,
    RegisterComponent,
    WikiComponent,
    AddWikiComponent,
    HomeComponent,
    FormComponent
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  FirebaseService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
