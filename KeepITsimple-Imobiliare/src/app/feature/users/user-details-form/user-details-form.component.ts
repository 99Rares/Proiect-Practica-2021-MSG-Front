import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user.service";
import {LongUser} from "../model/users.data";

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

  tooltipHistory: string = $localize`:@@tooltipHistory:Istoric`;

  userDetailsForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl({value: '', disabled: true}, [Validators.email, Validators.required])}
  )


  ngOnInit(): void {
    this.service.getUserDetails(this.tokenStorageService.getUserId()).subscribe((result) => {
      this.userDetailsForm.patchValue(result);})
  }

  goToHistory(){
    this.router.navigate(['userHistory']);
  }

  onSubmit() {
    this.user.firstName = this.userDetailsForm.value.firstName;
    this.user.lastName = this.userDetailsForm.value.lastName;
    this.user.id= this.tokenStorageService.getUserId();
    this.submitForm.emit(this.user);
  }

  getFullName() {
    return this.tokenStorageService.getUser();
  }

}
