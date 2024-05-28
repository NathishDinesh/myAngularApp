import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMasterComponent } from './Currency-master/currency-master/currency-master.component';
import { MasterRoutingRoutingModule } from './master-routing-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CurrencyMasterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterModule { }
