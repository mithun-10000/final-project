import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: FormGroup ;
  show: boolean;
  constructor(){
    this.show=false;
    this.form= new FormGroup({
      fname: new FormControl('',[ Validators.required, Validators.minLength(3)]),
      lname: new FormControl('', [ Validators.required, Validators.minLength(3)]),
      password: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9][a-z0-9])')]),
      conform_password: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9][a-z0-9])')]),
      address: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$')]),
      country: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pincode: new FormControl('', [ Validators.required, Validators.minLength(6)]),
      birth: new FormControl('', Validators.required)
    })
  }
  onScreen(){
    // console.log(this.form.value)
    if (this.form.valid) {
      this.show=true;
    } else {
      this.show=false;
    }
  //  this.show=true;
  }
  onSet(){
    this.form.setValue({
      fname:'ram',
      lname:'kumar',
      gender: 'Male',
      address: 'boral',
      email: 'mithun12@gmail.com',
      country: 'INDIA',
      state: 'wb',
      pincode: '700154' ,
      birth: '15-01-2021'
    })
  }
  onPatch(){
    this.form.patchValue({
      fname: 'ram',
      lname: 'kumar',
      gender:'Male',
      address:'Boral',
    })
  }
  onClear(){
    this.form.reset()
  }

}

