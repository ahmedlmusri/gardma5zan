import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  data = {
    productname: "",
    productcode:"",
    productsalary:"",
    productquantity:"",
    notes:""
  }

  email:string="";
  uid:any;
  product:AngularFireList<any>

  constructor(public fauth:AngularFireAuth,public db:AngularFireDatabase,public router:Router) { 
    this.product = db.list("products");
    let user = localStorage.getItem("email");
    this.email = user;
    console.log(user);
    this.uid = localStorage.getItem("uid");
    console.log(this.uid);
  }

  ngOnInit() {
  }


  insertproduct(){
    this.product.push({
      productname:this.data.productname,
      productcode:this.data.productcode,
      productsalary:this.data.productsalary,
      productquantity:this.data.productquantity,
      notes:this.data.notes
    });

    document.getElementById("success_add").innerHTML= 
    '<div class="success_add"><i class="fa fa-close"></i>تم اضافة الصنف الي المخزن بنجاح</div>';
  }

}
