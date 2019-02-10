import { Component, OnInit } from '@angular/core';
import {Car} from '../../../models/car.model';
import {CarsService} from '../../../services/cars.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {

  cars: Car[] = [];
  loading = true;

  constructor(private carService: CarsService) { }

  ngOnInit() {
    this.carService.getCars().subscribe((res)=>{
      this.cars = res;
      this.loading = false;
    },
    err => console.log(err))
  }

}
