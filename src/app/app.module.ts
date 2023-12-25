import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TruckListComponent } from './truck-list/truck-list.component';
import { CreateTruckComponent } from './create-truck/create-truck.component';
import { FormsModule } from '@angular/forms';
import { TruckDetailsComponent } from './truck-details/truck-details.component';
import { UpdateTruckComponent } from './update-truck/update-truck.component';


@NgModule({
  declarations: [
    AppComponent,
    TruckListComponent,
    CreateTruckComponent,
    TruckDetailsComponent,
    UpdateTruckComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
