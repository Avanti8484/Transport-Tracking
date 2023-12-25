import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
import { ActivatedRoute } from '@angular/router';
import { TruckService } from '../truck.service';

@Component({
  selector: 'app-truck-details',
  templateUrl: './truck-details.component.html',
  styleUrls: ['./truck-details.component.css']
})
export class TruckDetailsComponent implements OnInit {

  vehicle_no:any
    
  truck!: Truck;
  constructor(private route:ActivatedRoute,private truckService:TruckService){}
  ngOnInit(): void {

    this.vehicle_no=this.route.snapshot.params['vehicle_no'];
   
    this.truck = new Truck();
    this.truckService.getTruckByVehicleNo(this.vehicle_no).subscribe((data :any)=>{
          this.truck=data;
         
    });
      
  }

}
