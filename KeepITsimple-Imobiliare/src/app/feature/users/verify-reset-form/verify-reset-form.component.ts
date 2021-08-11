import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-verify-reset-form',
  templateUrl: './verify-reset-form.component.html',
  styleUrls: ['./verify-reset-form.component.scss']
})
export class VerifyResetFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  resetForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ])
  });

  ngOnInit(): void {
  }
  isValid() {
    return !!this.resetForm.controls['username'].value;

    // return !!(this.passwordReset.controls['passwordConfirm'].value === this.passwordReset.controls['password'].value && this.passwordReset.controls['passwordConfirm'].value &&
    //   this.passwordReset.controls['password'].value);

  }

  onSubmit() {
    console.log(this.resetForm.value.username)
    this.submitForm.emit(this.resetForm.value.username);
  }
}
