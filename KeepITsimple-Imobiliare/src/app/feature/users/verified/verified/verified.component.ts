import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {VerifiedService} from "../verified.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-verified',
  templateUrl: './verified.component.html',
  styleUrls: ['./verified.component.scss']
})
export class VerifiedComponent implements OnInit {
  // @Output() isVerified = new EventEmitter<boolean>();
  isVerified=true;
  constructor(
    private route: ActivatedRoute,
    private service: VerifiedService,
    private _snackBar: MatSnackBar
  ) {
  }

  msgVerifySuccess: string = $localize`:@@msgVerifySuccess:You have verified successfully!`;
  msgVerifyFail: string = $localize`:@@msgVerifyFail:Verification failed!`;

  ngOnInit() {
    let code: string | null = ""
    code = this.route.snapshot.queryParamMap.get('code');
    this.verify(code);
  }

  verify(code: string | null) {
    this.service.verify(code).subscribe(
      (data) => {
        if (data === "verify_success") {
          console.log("verify_success")
          this.isVerified=true;
          this._snackBar.open(this.msgVerifySuccess, "Ok");
        }
        if (data === "verify_fail") {
          this.isVerified=false;
          this._snackBar.open(this.msgVerifyFail,"Ok")
        }

      }, (error) =>
        console.log("verify_fail" + error)
    )
  }

}
