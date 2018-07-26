import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { AddWikiComponent } from './view/add-wiki/add-wiki.component';
import { HomeComponent } from './view/home/home.component';
import { FormComponent } from './view/form/form.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { DataTableComponent } from './views/tables/datatable/datatable.component';
import { TablesComponent } from './views/base/tables.component';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
// Import Containers


const routes: Routes = [
  {path: '', component: AddWikiComponent},
  {path: 'home', component: HomeComponent},
  {path: 'editWiki/:id', component: AddWikiComponent},
  {path: 'form' , component: FormComponent},
  {path: 'dashboard', component: DefaultLayoutComponent},
  {path: 'table', component: TablesComponent},

  {path: '**', redirectTo: '/addwiki', pathMatch: 'full'},
  
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
