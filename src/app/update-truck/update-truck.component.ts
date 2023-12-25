import { Component, OnInit } from '@angular/core';
import { Truck } from '../truck';
import { TruckService } from '../truck.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-truck',
  templateUrl: './update-truck.component.html',
  styleUrls: ['./update-truck.component.css']
})
export class UpdateTruckComponent implements OnInit {
  vehicle_no: any

  truck:Truck=new Truck();
  constructor(private truckService:TruckService,private route:ActivatedRoute,
             private router : Router){}

  ngOnInit(): void {
    this.vehicle_no=this.route.snapshot.params['vehicle_no'];

    this.truckService.getTruckByVehicleNo(this.vehicle_no).subscribe((data:any) =>{
      this.truck = data;
    }, error => console.log(error));
  }
    onSubmit()
    {
this.truckService.updateTruck(this.vehicle_no, this.truck).subscribe(data=>{
  this.goToTruckList();
}
   , error => console.log(error));
}
goToTruckList()
{
  this.router.navigate(['/trucks']);
}
 }

