import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {AccountService} from "../../services/account.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  requestToken: string = '';
  session_id: string|null = localStorage.getItem('session_id');
  userName!: string|null;
  avatar!: string|null;

  constructor(private authenticationService: AuthenticationService, private accountService: AccountService) {
  }

  ngOnInit(): void {
    this.accountService.getDetails().subscribe(response => {
      this.userName = response.username;
      this.avatar = response.avatar.tmdb.avatar_path;
    })
  }

  authenticate() {
    this.authenticationService.getRequestToken().subscribe(response => {
      this.requestToken = response.request_token;
      window.location.href = `https://www.themoviedb.org/authenticate/${this.requestToken}?redirect_to=http://localhost:4200/`
    });
  }

  logOut() {
    this.authenticationService.deleteSession(localStorage.getItem('session_id') || '').subscribe();
    localStorage.removeItem('session_id')
    this.session_id = null;
    this.userName = null;
    this.avatar = null;
  }
}
