import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { AddWikiComponent } from './view/add-wiki/add-wiki.component';
import { HomeComponent } from './view/home/home.component';
import { FormComponent } from './view/form/form.component';
// Import Containers


const routes: Routes = [
  {path: '', component: AddWikiComponent},
  {path: 'home', component: HomeComponent},
  {path: 'editWiki/:id', component: AddWikiComponent},
  {path: 'form' , component: FormComponent},
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
