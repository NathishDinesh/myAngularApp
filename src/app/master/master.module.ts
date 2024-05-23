import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMasterComponent } from './Currency-master/currency-master/currency-master.component';
import { MasterRoutingRoutingModule } from './master-routing-routing.module';



@NgModule({
  declarations: [
    CurrencyMasterComponent
  ],
  imports: [
    CommonModule,
    MasterRoutingRoutingModule
  ]
})
export class MasterModule { }
