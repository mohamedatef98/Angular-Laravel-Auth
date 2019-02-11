import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {Car} from '../../../models/car.model';
import {CarsService} from '../../../services/cars.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  id: number;

  car: Car= {
    make: '',
    model: '',
    year: 0
  };

  constructor(private route: ActivatedRoute, private carService: CarsService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      this.id = +paramMap.get('id')
    })
  }

  submit(){
   if(this.id){
     this.carService.createCar(this.car).subscribe((res)=>{
       console.log(res)
     },(err)=>{
       console.log(err)
     })
   }
   else {
     this.carService.editCar(this.id, this.car).subscribe((res)=>{
       console.log(res)
     },(err)=>{
       console.log(err)
     })
   }
  }

  clear(){
    for(let key of Object.keys(this.car)){
      this.car[key] = key == 'year' ? 0 : '';
    }
  }

}
