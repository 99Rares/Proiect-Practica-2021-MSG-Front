import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {passwordsMustMatchValidator} from "../passwordsMatch.directive";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-password-reset-form',
  templateUrl: './password-reset-form.component.html',
  styleUrls: ['./password-reset-form.component.scss']
})
export class PasswordResetFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<{ password: string, code: string | null }> = new EventEmitter<{ password: string, code: string | null }>();

  constructor(private route: ActivatedRoute,) {
  }

  passwordReset = new FormGroup({
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      passwordConfirm: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ])
    }, {validators: passwordsMustMatchValidator}
  )
  getCode: string | null = ""

  ngOnInit(): void {
    this.getCode = this.route.snapshot.queryParamMap.get('code');
  }
  isValid() {
    return !!(this.passwordReset.controls['passwordConfirm'].value === this.passwordReset.controls['password'].value && this.passwordReset.controls['passwordConfirm'].value &&
      this.passwordReset.controls['password'].value);

  }

  onSubmit() {
    this.submitForm.emit({password: this.passwordReset.value.password, code: this.getCode});
  }
}
