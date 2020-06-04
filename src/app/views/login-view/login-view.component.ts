import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserData } from 'src/app/models/userData';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  
  constructor(
    private router: Router,
    private snackBar: MatSnackBar,
    private localStorage: LocalStorage
  ) { }
  loginClintId: String = '231779370323-hlipjsqbc1lece5sj0vujvntp9ctv561.apps.googleusercontent.com';
  clientSecretKey: String = 'CeCorL31-KpJC0-siwKmlTzW';
  auth2: any;
  
  @ViewChild('loginRef', {static: true }) loginElement: ElementRef;
  ngOnInit(): void {
    this.googleSDK();
  }

  googleSDK() {

    window['googleSDKLoaded'] = () => {
      window['gapi'].load('auth2', () => {
        this.auth2 = window['gapi'].auth2.init({
          client_id: this.loginClintId,
          cookiepolicy: 'single_host_origin',
          scope: 'profile email'
        });
        this.prepareLoginButton();
      });
    }

    (function(d, s, id){
      var js:any, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'google-jssdk'));
  }
  
  prepareLoginButton() {

    this.auth2.attachClickHandler(this.loginElement.nativeElement, {},
      (googleUser) => {
        let userData: UserData;
        let profile = googleUser.getBasicProfile();
        console.log('Token || ' + googleUser.getAuthResponse().id_token);
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());
        
        userData = {
          token: googleUser.getAuthResponse().id_token,
          id: profile.getId(),
          name: profile.getName(),
          profileImageUrl: profile.getImageUrl(),
          email: profile.getEmail(),
        }
        //YOUR CODE HERE
        if(profile != null) {
          localStorage.setItem('userprofileData', JSON.stringify(userData));
          this.router.navigateByUrl('/home');
          setTimeout(() => {
            window.location.reload();
          }, 1000);
        } else {
          this.snackBar.open('Login failed ! Please check back a moment later.', '' ,{duration: 3});
        }
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });

  }
}
