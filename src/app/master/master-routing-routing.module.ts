import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from '../layout/app-layout/app-layout/app-layout.component';
import { CurrencyMasterComponent } from './Currency-master/currency-master/currency-master.component';

const routes: Routes = [
  {
    path:'',
    component:AppLayoutComponent,
    children:[
      {
        path:'',component:CurrencyMasterComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingRoutingModule { }
