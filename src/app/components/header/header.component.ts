import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router
  ) { }
  authButton: string;

  ngOnInit(): void {
    console.log(this.router.events); 
    this.router.events.subscribe(val => {
      if(val instanceof  NavigationEnd) {
        val.url == '/home' ? this.authButton = 'Logout' : this.authButton = 'Login';
      }
    });
  }

  logout() {
    localStorage.clear();
  }
}
