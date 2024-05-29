import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layout/app-layout/app-layout/app-layout.component';

const routes: Routes = [
  {
    path:'',component:AppLayoutComponent,
  },
  {
    path:'currency-add',loadChildren:()=> import('src/app/master/master.module').then(m=>m.MasterModule)
  },
  {
    path:'currency-list',loadChildren:()=>import('src/app/setup/setup.module').then(m=>m.SetupModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
