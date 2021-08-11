import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";
import {passwordsMustMatchValidator} from "../passwordsMatch.directive";
import {LongUser} from "../model/users.data";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<LongUser> = new EventEmitter<LongUser>();
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
    this.submitForm.emit(this.registerForm.value);
  }

}
