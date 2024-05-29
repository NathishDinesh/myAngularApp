import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../../master.service';

@Component({
  selector: 'app-currency-master',
  templateUrl: './currency-master.component.html',
  styleUrls: ['./currency-master.component.css']
})
export class CurrencyMasterComponent implements OnInit {
  public masterForm: FormGroup = new FormGroup({
    currencyCode: new FormControl('', [Validators.required]),
    currencyName: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required])
  })

  constructor(private masterService:MasterService) { }

  ngOnInit(): void {
  }
  formName(name: any): FormArray {
    return this.masterForm.controls[name] as FormArray;
  }

  onSave(){
    if(this.masterForm.valid){
      this.masterService.addcurrencyMaster(this.masterForm.value);
      this.masterForm.reset();
    }
  }

}
