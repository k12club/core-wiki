import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { AddWikiComponent } from './view/add-wiki/add-wiki.component';
import { HomeComponent } from './view/home/home.component';
import { FormComponent } from './view/form/form.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { CoreUIIconsComponent } from './views/icons/coreui-icons.component';
import { FlagsComponent } from './views/icons/flags.component';
import { FontAwesomeComponent } from './views/icons/font-awesome.component';
import { SimpleLineIconsComponent } from './views/icons/simple-line-icons.component';
import { ButtonsComponent } from './views/buttons/buttons.component';
import { TablesComponent } from './views/tables/tables.component';
// Import Containers


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'addwiki', component: AddWikiComponent},
  {path: 'home', component: HomeComponent},
  {path: 'editWiki/:id', component: AddWikiComponent},
  {path: 'form' , component: FormComponent},
  {path: 'dashboard', component: DefaultLayoutComponent},
  {path: 'table', component: TablesComponent},
  {path: 'coreuiIcons', component: CoreUIIconsComponent},
  {path: 'flagsIcons', component: FlagsComponent},
  {path: 'fontAwesomeIcon', component: FontAwesomeComponent},
  {path: 'simplelineIcons', component: SimpleLineIconsComponent},
  {path: 'buttons', component: ButtonsComponent},





  {path: '**', redirectTo: '/home', pathMatch: 'full'},
  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
