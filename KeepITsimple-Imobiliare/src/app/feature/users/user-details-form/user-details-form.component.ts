import { Component, OnInit } from '@angular/core';
import {TokenStorageService} from "../../services/token-storage.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.scss']
})
export class UserDetailsFormComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService, private router: Router) { }

  userDetailsForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email, Validators.required])}
  )

  ngOnInit(): void {
  }

  goToHistory(){
    this.router.navigate(['userHistory']);
  }

  onSubmit() {
    console.log(this.userDetailsForm.value);
  }

}
