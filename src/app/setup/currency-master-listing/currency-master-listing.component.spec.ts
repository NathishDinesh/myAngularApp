import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyMasterListingComponent } from './currency-master-listing.component';

describe('CurrencyMasterListingComponent', () => {
  let component: CurrencyMasterListingComponent;
  let fixture: ComponentFixture<CurrencyMasterListingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyMasterListingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyMasterListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
