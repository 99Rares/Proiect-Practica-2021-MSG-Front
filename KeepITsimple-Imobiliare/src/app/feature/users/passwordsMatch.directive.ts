import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn} from "@angular/forms";
import {Directive} from "@angular/core";

export const passwordsMustMatchValidator: ValidatorFn=(control: AbstractControl): ValidationErrors | null=>{
  const password = control.get('password');
  const passwordConfirm = control.get('passwordConfirm');

  return password && passwordConfirm && password.value === passwordConfirm.value ? null: { passwordsMustMatchValidator: true };
}

@Directive({
  selector: '[appPasswordsMatch]',
  providers: [{ provide: NG_VALIDATORS, useExisting: passwordsMustMatchValidatorDirective, multi: true }]
})
export class passwordsMustMatchValidatorDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return passwordsMustMatchValidator(control);
  }
}
