import { Component } from "@angular/core";
import { NgForm } from  "@angular/forms";
import {AuthService} from '../../../services/auth.service';
import {TokenService} from '../../../services/token.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  errors = [];

  constructor(private auth: AuthService, private tokenService: TokenService, private router: Router, private route: ActivatedRoute){}

  submit(form: NgForm){
    this.errors = [];
    this.auth.login(form.value.email, form.value.password).subscribe(
      res=>this.handleResponse(res),
      err=>{
        console.log(err);
        let errors = err.error;
        for(let errkey in errors)
          this.errors.push(errors[errkey])
      });
  }

  handleResponse(res){
    console.log(res);
    this.tokenService.handle(res.access_token);
    this.auth.loggedIn.next(true);
    this.router.navigate(['../cars'], {relativeTo: this.route})
  }
}
