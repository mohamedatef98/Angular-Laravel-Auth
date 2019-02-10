import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedInService implements CanActivate{

  canActivate(){
    return this.token.isValid();
  }

  constructor(private token: TokenService){}
}
