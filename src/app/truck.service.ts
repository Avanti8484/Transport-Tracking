import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Truck } from './truck';

@Injectable({
  providedIn: 'root'
})
export class TruckService {
  private baseURL="http://localhost:8080/api/v1/trucks";

  constructor(private httpClient: HttpClient) { }
  getTruckList(): Observable<Truck[]>{
    return this.httpClient.get<Truck[]>(`${this.baseURL}`);
  }

  createTruck(truck: Truck):Observable<Object>
  {
     return this.httpClient.post(`${this.baseURL}`, truck);
  }

  updateTruck(vehicle_no:any,truck:Truck):Observable<Object>
  {
    return this.httpClient.put(`${this.baseURL}`,truck);
  }

  

  deleteTruck(vehicle_no:any):Observable<Object>
  {
    return this.httpClient.delete(`${this.baseURL}/${vehicle_no}`);
  }
  
  getTruckByVehicleNo(vehicle_no:any):Observable<Object>{
    return this.httpClient.get<Truck>(`${this.baseURL}/${vehicle_no}`);
  }

}
