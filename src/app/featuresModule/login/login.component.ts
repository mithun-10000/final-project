import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: FormGroup;
  show: boolean;
  constructor(){
    this.show=true;
    this.form= new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$')]),
      password: new FormControl('',[Validators.required, Validators.pattern('^[a-z0-9][a-z0-9])')]),
      conform_password: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9][a-z0-9])')]),
    })
  }
  logIn(){
    console.log(this.form.value)
    if (this.form.valid) {
      this.show=false;
    } else {
      this.show=true;
    }
  //  this.show=true;
  }
}

