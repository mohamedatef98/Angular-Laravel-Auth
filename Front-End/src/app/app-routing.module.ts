import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { AllComponent } from './components/cars/all/all.component';
import { OneComponent } from './components/cars/one/one.component';
import { FormComponent } from './components/cars/form/form.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "signup", component: SignUpComponent},
  {path: "cars", children: [
    {path: '', component: AllComponent},
    {path: 'create', component: FormComponent},
    {path: ':id', children: [
      {path: '', component: OneComponent},
      {path: 'edit', component: FormComponent}
    ]},
  ]},
  {path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
