import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string="";
  pass:string="";
  constructor(private fire:AngularFireAuth,private router:Router ) {


   }

  ngOnInit() {
  }


  login(){
    this.fire.auth.signInWithEmailAndPassword(this.email,this.pass)
    .then(user=>{
      localStorage.setItem('islogin','true');
      localStorage.setItem('email',this.fire.auth.currentUser.email);
      this.fire.authState.subscribe(auth=>{
        if(auth){
          localStorage.setItem('uid',auth.uid);
        }
    });
      this.router.navigate(['admin/navbar']);
    }).catch(error=>{
      console.log(error);
    });
  }
}
