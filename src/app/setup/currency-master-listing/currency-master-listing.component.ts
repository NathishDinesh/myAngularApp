import { Component, OnInit } from '@angular/core';
import { MasterService } from 'src/app/master/master.service';

@Component({
  selector: 'app-currency-master-listing',
  templateUrl: './currency-master-listing.component.html',
  styleUrls: ['./currency-master-listing.component.css']
})
export class CurrencyMasterListingComponent implements OnInit {
  currencies:any[]=[];

  constructor(private masterService:MasterService) { }

  ngOnInit(): void {
    this.masterService.currencies$.subscribe(data=>{
      this.currencies=data;
    })
  }

}
