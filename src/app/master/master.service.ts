import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }
  private currencyMasterList = new BehaviorSubject<any[]>([]);
  currencies$ = this.currencyMasterList.asObservable();

  addcurrencyMaster(currency:any):void{
    const currentList = this.currencyMasterList.getValue();
    currentList.push(currency);
    this.currencyMasterList.next(currentList);
  }
}
