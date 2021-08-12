import {Component, EventEmitter, Inject, Injectable, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {matFormFieldAnimations} from "@angular/material/form-field";
import {LongUser} from "../model/users.data";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UserDetailsComponent} from "../user-details/user-details.component";

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss']
})
export class UserDetailsFormComponent implements OnInit {
  @Output() submitForm: EventEmitter<LongUser> = new EventEmitter<LongUser>();
  user: LongUser = new class implements LongUser {
    email: string = '';
    firstName: string = '';
    fullName: string = '';
    id: number = 0;
    lastName: string = '';
    password: string ='';
    token: string='';
  };
  constructor(private tokenStorageService: TokenStorageService, private router: Router, private service: UserService) { }

  userDetailsForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl({value: '', disabled: true}, [Validators.email, Validators.required])}
  )


  ngOnInit(): void {
    //console.log(this.tokenStorageService.getUserId());
    this.service.getUserDetails(this.tokenStorageService.getUserId()).subscribe((result) => {
      this.userDetailsForm.patchValue(result);})
  }

  goToHistory(){
    this.router.navigate(['userHistory']);
  }

  onSubmit() {
    //console.log(this.userDetailsForm.value);
    this.user.firstName = this.userDetailsForm.value.firstName;
    this.user.lastName = this.userDetailsForm.value.lastName;
    //this.user.email =this.userDetailsForm.value.email;
    this.user.id= this.tokenStorageService.getUserId();
    this.submitForm.emit(this.user);
  }

  getFullName() {
    return this.tokenStorageService.getUser();
  }

}
