import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TruckListComponent } from './truck-list/truck-list.component';
import { CreateTruckComponent } from './create-truck/create-truck.component';
import { TruckDetailsComponent } from './truck-details/truck-details.component';
import { UpdateTruckComponent } from './update-truck/update-truck.component';

const routes: Routes = [
  {path:'trucks',component: TruckListComponent},
  {path:'create-truck',component: CreateTruckComponent},
  {path:'' , redirectTo:'trucks',pathMatch:'full'},
  {path:'update-truck/:vehicle_no',component:UpdateTruckComponent},
  {path:'truck-details/:vehicle_no', component:TruckDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
