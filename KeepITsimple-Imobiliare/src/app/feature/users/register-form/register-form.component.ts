import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {passwordsMustMatchValidator} from "../passwordsMatch.directive";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  //@Output() submitForm: EventEmitter<ShortUser> = new EventEmitter<ShortUser>();
  constructor() {

  }

  registerForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])
    },{validators: passwordsMustMatchValidator}
  )


  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.registerForm.value);
    //this.submitForm.emit(this.loginForm.value);
  }

}
