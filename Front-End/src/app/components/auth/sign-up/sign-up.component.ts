import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import {AuthService} from '../../../services/auth.service';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{

  errors = [];

  constructor(private auth: AuthService){}

  submit(form: NgForm){
    this.errors = [];
    this.auth.signUp(form.value.name, form.value.email, form.value.password).subscribe(
      res=>{console.log(res)},
        err=>{
          let errors = err.error.errors;
          for(let errkey in errors)
            errors[errkey].forEach((err)=>this.errors.push(err))
        });
  }
}
