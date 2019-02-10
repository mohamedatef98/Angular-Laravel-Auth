import { Component } from "@angular/core";
import { NgForm } from '@angular/forms';
import {AuthService} from '../../../services/auth.service';
import {TokenService} from '../../../services/token.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{

  errors = [];

  constructor(private auth: AuthService, private tokenService: TokenService, private router: Router, private route: ActivatedRoute){}

  submit(form: NgForm){
    this.errors = [];
    this.auth.signUp(form.value.name, form.value.email, form.value.password).subscribe(
      res=>this.handleResponse(res),
        err=>{
          let errors = err.error.errors;
          for(let errkey in errors)
            errors[errkey].forEach((err)=>this.errors.push(err))
        });
  }

  handleResponse(res){
    this.tokenService.handle(res.accessToken);
    this.auth.loggedIn.next(true);
    this.router.navigate(['../cars'], {relativeTo: this.route})
  }
}
