import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {api} from  "../globals";

@Injectable({
    providedIn: 'root'
})
export class AuthService{
    private user;

    constructor(private  http: HttpClient){}

    login(email: string, password: string){
        return this.http.post(api + "/login", {email, password});
    }

    signUp(name: string, email: string, password: string){
        return this.http.post(api + '/signup', {name, email, password});
    }
}
