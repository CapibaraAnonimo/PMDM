import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = "";
  password = "";
  isVisible = false;
  type = 'password';
  checked = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeVisibility() {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
