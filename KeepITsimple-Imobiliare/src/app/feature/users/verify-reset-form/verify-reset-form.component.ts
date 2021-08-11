import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../user.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ShortUser} from "../model/users.data";

@Component({
  selector: 'app-verify-reset-form',
  templateUrl: './verify-reset-form.component.html',
  styleUrls: ['./verify-reset-form.component.scss']
})
export class VerifyResetFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<string> = new EventEmitter<string>();
  constructor(private service: UserService) { }
  resetForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.email,
    ])
  });

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.resetForm.value.username)
    this.submitForm.emit(this.resetForm.value.username);
  }
}
