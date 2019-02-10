import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {api} from  "../globals";
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    public loggedIn: Subject<boolean> = new Subject<boolean>();



    constructor(private  http: HttpClient){}

    login(email: string, password: string){
        return this.http.post(api + "/login", {email, password});
    }

    signUp(name: string, email: string, password: string, password_confirmation: string){
        return this.http.post(api + '/signup', {name, email, password, password_confirmation});
    }

    logout(name: string){
      return this.http.post(api + '/logout', {name});
    }
}
