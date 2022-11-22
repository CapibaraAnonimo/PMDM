import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebase from "firebase/compat";
import auth = firebase.auth;

const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
  'login_hint': 'user@example.com'
});

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afauth: AngularFireAuth) {
  }

  user = this.afauth.authState.pipe(map(authState => {
    console.log(' authState : ', authState);
    if (authState) {
      return authState;
    } else {
      return null;
    }
  }));

  login() {
    console.log('login!');
  }

  gglogin() {
    console.log('google login!');
    this.afauth.signInWithPopup(new GoogleAuthProvider()).then(user => {
      console.log('user logeado: ' + user)
    }).catch(error => {
      console.log('error en google login: ' + error)
    });
  }

  glogin() {
    //return this.AuthLogin(new GoogleAuthProvider());
    this.afauth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // Auth logic to run auth providers
  AuthLogin(provider: auth.GoogleAuthProvider) {
    return this.afauth
      .signInWithPopup(provider)
      .then((result) => {
        console.log('You have been successfully logged in!');
      })
      .catch((error) => {
        console.log(error);
      });
  }

  logout() {
    console.log('logout!');
  }
}
