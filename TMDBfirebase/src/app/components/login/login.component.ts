import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  requestToken: string = '';
  session_id: string|null = localStorage.getItem('session_id');

  constructor(private authenticationService: AuthenticationService, private router: Router) {
  }

  ngOnInit(): void {
  }

  authenticate() {
    this.authenticationService.getRequestToken().subscribe(response => {
      this.requestToken = response.request_token;
      window.location.href = `https://www.themoviedb.org/authenticate/${this.requestToken}?redirect_to=http://localhost:4200/`
    });
  }

  logOut() {
    localStorage.removeItem('session_id')
    this.session_id = null;
  }
}
