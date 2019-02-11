import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {api} from '../globals';
import {Car} from '../models/car.model';
import {Subject} from 'rxjs';
import {TokenService} from './token.service';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  event = new Subject<undefined>();

  constructor(private http: HttpClient, private token: TokenService) { }

  getCars(){
    return this.http.get<Car[]>(api + '/cars')
  }

  getCar(id: number){
    return this.http.get<Car>(api + "/cars/" + id)
  }

  createCar(car: Car){
    this.event.next();
    return this.http.post(api + '/cars' , car, {headers: [
        ''
      ]})
  }

  editCar(id: number, car: Car){
    this.event.next();
    return this.http.put(api + '/cars/' + id, car)
  }

  deleteCar(id: number){
    this.event.next();
    return this.http.delete(api + "/cars/" + id)
  }
}
