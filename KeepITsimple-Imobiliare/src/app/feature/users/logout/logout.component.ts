import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logout() {
    console.log("logged out")
    alert("ceva")
    localStorage.removeItem('user');
    sessionStorage.removeItem('token');
    window.location.reload();
    console.log("logged out")
  }
}
