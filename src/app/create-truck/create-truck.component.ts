import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
import { TruckService } from '../truck.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-truck',
  templateUrl: './create-truck.component.html',
  styleUrls: ['./create-truck.component.css']
})
export class CreateTruckComponent implements OnInit {


  truck : Truck= new Truck();
//   add = new FormGroup({
//    vehicle_no:new FormControl("",[Validators.max(10)]),
//     mode:new FormControl("",Validators.required)
// });
 
  constructor(private truckService: TruckService ,  private router:Router)
  {

  }


  ngOnInit(): void {
      
  }
  
 saveTruck()
 {
  this.truckService.createTruck(this.truck).subscribe(data=>{
    console.log(data);
    this.goToTruckList();
  },
  error => console.log(error));
    
 }


 goToTruckList()
 {
  this.router.navigate(['/trucks']);
 } 



  onSubmit()
  {
    console.log(this.truck);
    this.saveTruck();
  }

}
