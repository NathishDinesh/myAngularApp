import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyMasterListingComponent } from './currency-master-listing/currency-master-listing.component';
import { SetupRoutingModule } from './setup-routing.module';



@NgModule({
  declarations: [
    CurrencyMasterListingComponent
  ],
  imports: [
    CommonModule,
    SetupRoutingModule
  ]
})
export class SetupModule { }
