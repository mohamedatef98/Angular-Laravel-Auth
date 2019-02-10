import { Component } from "@angular/core";
import { NgForm } from  "@angular/forms";
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  errors = [];

  constructor(private auth: AuthService){}

  submit(form: NgForm){
    this.auth.login(form.value.email, form.value.password).subscribe(
      res=>console.log(res),
      err=>{
        let errors = err.error.errors;
        for(let errkey in errors)
          errors[errkey].forEach((err)=>this.errors.push(err))
      });
  }
}
