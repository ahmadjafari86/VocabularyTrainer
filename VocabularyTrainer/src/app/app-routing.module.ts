import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {AboutComponent} from "./components/about/about.component";
import {RegisterComponent} from "./components/register/register.component";
import {LoginComponent} from "./components/login/login.component";
import {PagenotfoundComponent} from "./components/pagenotfound/pagenotfound.component";
import {WordlistComponent} from "./components/wordlist/wordlist.component";
import {WordtrainingComponent} from "./components/wordtraining/wordtraining.component";

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'about',component:AboutComponent},
  {path:'wordlist',component:WordlistComponent},
  {path:'training',component:WordtrainingComponent},
  //Wild Card Route for 404 request
  { path: '**', pathMatch: 'full',
    component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
