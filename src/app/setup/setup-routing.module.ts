import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app-layout/app-layout/app-layout.component';
import { CurrencyMasterListingComponent } from './currency-master-listing/currency-master-listing.component';
const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
        {
            path:'',component:CurrencyMasterListingComponent
        }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
