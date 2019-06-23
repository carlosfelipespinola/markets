import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { BuyerAddress } from '../../data_classes/BuyerAddress';

@Component({
  selector: 'app-buyer-address',
  templateUrl: './buyer-address.component.html',
  styleUrls: ['./buyer-address.component.scss']
})
export class BuyerAddressComponent implements OnInit {

  zipCode = new FormControl('', [Validators.required]);
  addressForm = new FormGroup({
    zipCode: new FormControl('', [ Validators.required ] ),
    address: new FormControl('', [Validators.required]),
    addOnAdress: new FormControl('', [Validators.required])
  });

  protected getZipCodeErrorMessage() {
    return 'CEP é obrigatório';
  }

  protected getAddressErrorMessage() {
    return 'Endereço é obrigatório';
  }

  protected getAddOnAdressErrorMessage() {
    return 'Complemento é obrigatório';
  }



  constructor() { }

  ngOnInit() {  }

  public get isValid() {
    return this.addressForm.valid;
  }

  public get address(): BuyerAddress {
    const address = new BuyerAddress();
    address.zipCode = this.addressForm.controls['zipCode'].value
    address.address = this.addressForm.controls['address'].value
    address.addOnAdress = this.addressForm.controls['addOnAdress'].value
    return address;
  }
}
