import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout/app-layout.component';
import { HeaderComponent } from './layout/shared/header/header/header.component';
import { CuurencyMasterComponent } from './master/Currency Master/cuurency-master/cuurency-master.component';
import { CurrencyMasterComponent } from './master/currency-master/currency-master.component';
import { MasterRoutingModule } from './master/currency-master/master-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    HeaderComponent,
    CuurencyMasterComponent,
    CurrencyMasterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MasterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
