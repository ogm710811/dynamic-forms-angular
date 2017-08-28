import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {
  myForm: FormGroup; // our form model

  constructor( private _fb: FormBuilder ) { }

ngOnInit() {
  // we will initialize our form here
  this.myForm = this._fb.group({
    name: ['', [Validators.required, Validators.minLength(5)]],
    addresses: this._fb.array([
        this.initAddress(),
    ])
  });
}

initAddress() {
  // initialize our address
  return this._fb.group({
      street: ['', Validators.required],
      postcode: ['']
  });
}

addAddress() {
  // add address to the list
  const control = <FormArray>this.myForm.controls['addresses'];
  control.push(this.initAddress());
}

removeAddress(i: number) {
  // remove address from the list
  const control = <FormArray>this.myForm.controls['addresses'];
  control.removeAt(i);
}

save(model: Customer) {
  // call API to save customer
  console.log(model);
}

}
