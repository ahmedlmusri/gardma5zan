import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-manageproduct',
  templateUrl: './manageproduct.component.html',
  styleUrls: ['./manageproduct.component.css']
})


export class ManageproductComponent implements OnInit {
  data = {
    productname:"",
    productcode:"",
    productsalary:"",
    productquantity:"",
    notes:""
  }
  
  product:AngularFireList<any>;
  itemlist=[];

  constructor(public db:AngularFireDatabase,public router:Router) {
    this.product = db.list("products");
    this.product.snapshotChanges().subscribe(actions=>{
      actions.forEach(action=>{
        let y = action.payload.toJSON()
        y['$key'] =action.key
        this.itemlist.push(y as itemlistclass);
      });
    });

   }

  ngOnInit() {
  }


  editform($key){
    for(let value of this.itemlist){
      if(value['$key'] == $key){
        this.data.productname = value['productname'];
        this.data.productcode= value['productcode'];
        this.data.productsalary= value['productsalary'];
        this.data.productquantity= value['productquantity'];
        this.data.notes= value['notes'];

      }

    }
  }

  updateform($key){
    this.data.productname
    this.data.productcode
    this.data.productsalary
    this.data.productquantity
    this.data.notes
    this.product.set($key,{
      productname:this.data.productname,
      productcode:this.data.productcode,
      productsalary:this.data.productsalary,
      productquantity:this.data.productquantity,
      notes:this.data.notes
    });
    this.itemlist=[];
  }

  delete($key){
    this.product.remove($key);
    this.itemlist=[];

  }

}

export class itemlistclass{
  $key:string;
  productname:string;
  productcode:string;
  productsalary:string;
  productquantity:string;
  notes:string;
}
