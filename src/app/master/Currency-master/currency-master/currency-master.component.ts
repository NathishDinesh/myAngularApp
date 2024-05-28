import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor() { }

  ngOnInit(): void {
  }
  formName(name: any): FormArray {
    return this.masterForm.controls[name] as FormArray;
  }

}
