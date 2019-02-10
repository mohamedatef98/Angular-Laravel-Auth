import {Component, OnInit} from '@angular/core';
import {AuthService} from './services/auth.service';
import {TokenService} from './services/token.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  loggedIn: boolean = false;

  constructor(private auth: AuthService, private tokenService: TokenService, private router: Router){}

  ngOnInit(){
    this.loggedIn = this.tokenService.isValid();
    this.auth.loggedIn.subscribe((value: boolean) => this.loggedIn = value)
  }

  logout(e){
    e.preventDefault();
    this.tokenService.remove();
    this.auth.loggedIn.next(false)
    this.router.navigate(['/'])
  }
}
