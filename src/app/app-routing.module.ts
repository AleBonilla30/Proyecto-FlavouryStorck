import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/* import { LoginComponent } from './shared/login/login.component';
import { CreateAccountComponent } from './shared/create-account/create-account.component'; */

const routes: Routes = [/* 
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },

  { path: '', redirectTo: '/login', pathMatch: 'full' } */ //revisar si es necesario 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
