import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
import { TruckService } from '../truck.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-truck-list',
  templateUrl: './truck-list.component.html',
  styleUrls: ['./truck-list.component.css']
})
export class TruckListComponent  implements OnInit{

  trucks!: Truck[];

  constructor(private truckService: TruckService ,private router:Router){}

  ngOnInit(): void {
    this.getTrucks();
   
      
  }
  private getTrucks()
  {
    this.truckService.getTruckList().subscribe(data=>{
      this.trucks=data;
    });
  }


  deleteTruck(vehicle_no: any)
  {
    this.truckService.deleteTruck(vehicle_no).subscribe(data=>{
      console.log(data);
      this.getTrucks();
    })
  }

  updateTruck(vehicle_no: any)
  {
    this.router.navigate(['update-truck',vehicle_no]);
  }



  truckDetails(vehicle_no:any)
  {
    this.router.navigate(['truck-details',vehicle_no]);
  }

}
