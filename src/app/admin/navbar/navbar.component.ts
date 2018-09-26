import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private fauth:AngularFireAuth,private router:Router) {

   }

  ngOnInit() {
  }


  logout(){
    this.fauth.auth.signOut();
    this.router.navigate(['admin/login']);
  }

}
