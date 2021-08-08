import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShortUser } from '../model/users.data';
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<ShortUser> = new EventEmitter<ShortUser>();

  constructor(private router:Router) {}

  loginForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  ngOnInit(): void {}

  onSubmit() {
    //console.log(this.loginForm.value);
    this.submitForm.emit(this.loginForm.value);
  }

  isValid() {
    return (
      !!this.loginForm.controls['username'].value &&
      !!this.loginForm.controls['password'].value
    );
  }

  register(){
    this.router.navigate(['/register']);
  }
}
