import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  form = new FormGroup({
    username: new FormControl('',
     [Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace],
    UsernameValidators.shoulBeUnique),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  login(): void {
    this.form.setErrors({
      invalidLogin: true
    });
  }
  get username(): AbstractControl|null {
    return this.form.get('username');
  }
  get password(): AbstractControl|null{
    return this.form.get('password');
  }
}
