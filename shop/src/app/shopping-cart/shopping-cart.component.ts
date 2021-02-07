import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PRODUCTS } from '../mock-Products';
import { Product } from '../Product';
import { Cart } from '../Cart';
import { from, pairs } from 'rxjs';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  piecess: number[] = [];
  price : number = 0;
  pieces : number = 1;
  total_price : number = 0;
  value_check: boolean = false;
  shipping_cost : number = 25;
  all_total_price: number = 0.00;
  check: boolean = false;

  product = PRODUCTS;
  productsForm: FormGroup;
  selectedProduct!: Product;

  constructor(private fb: FormBuilder,public db: AngularFireDatabase) { 
    this.productsForm = this.fb.group({
      idProduct: [],
      image: [''],
      productName: [''],
      size: [''],
      price: [''],
      storeName: ['']
    });
    for(let i =0; i<this.product.length;i++){
      this.piecess[i]=1;
    }
    console.log(this.piecess);
    this.update();
    
  }

  ngOnInit(): void {
    
    const members = [ 
      {name: "Eve", age: 24}, 
      {name: "Adam", age: 48}, 
      {name: "Chris", age: 18}, 
      {name: "Danny", age: 30}
   ];
   let x = this.product;
   console.log(x[1].price);
   
   


  }

  /*
  updatevalue_check(value :boolean, price:number){
    if(value==false){
      return false;
    }
  }*/
  set_updatevalue_check(){

  }

  total(price:number, pieces:number){
    sum:Number;
    const sum =(price);
    return sum;
  }

  all_total(price:number, pieces:number, shipping_cost:number){
    sum:Number;
    const sum =(price+shipping_cost);
    return sum;
  }
  
  onKey(value: string, product: Product) {
      this.onSelect(product);
      this.piecess[(product.idProduct)-1]= Number(value);
      //console.log(this.piecess);
      this.pieces=this.piecess[(product.idProduct)-1];
      //this.updateOnClick(product);
      this.update(); 
  }

  update(){
    this.total_price=this.total(this.price, this.pieces);
    this.all_total_price=this.all_total(this.price, this.pieces, this.shipping_cost);
    console.log(this.piecess);
  }

  updateOnClick(product: Product){
    this.pieces_check(this.piecess[product.idProduct-1], product);
    this.update();
  }

  onclick_plus(value: string, product: Product){
    this.piecess[(product.idProduct)-1]=(Number(value)+1);
    this.price = (product.price*this.piecess[product.idProduct-1]);
    this.updateOnClick(product);
    //this.update();
  }

  onclick_minus(value: string,product: Product){
    this.piecess[(product.idProduct)-1]=(Number(value)-1);
    this.price = (product.price*this.piecess[product.idProduct-1]);
    this.updateOnClick(product);
    //this.update(); 
  }
  
  pieces_check(check:number, product: Product){
    if(check <= 0){
      this.piecess[product.idProduct-1]= 1;
    }else{
      this.piecess[product.idProduct-1]= check;
    }
  }

  box_check(e:any, c:boolean, product: Product){
    if(e.target.checked){
      this.check = true;
      this.onSelect(product);
      this.plusPrice(product);
    }else{
      this.check = false;
      this.onSelect(product); 
      this.minusPrice(product);
    }
    return this.check;
  }
  

onSelect(product: Product): void {
  this.selectedProduct = product;
  console.log("passssssss", this.selectedProduct);
}

plusPrice(product:Product){
  this.price += (product.price*this.piecess[product.idProduct-1]);
  console.log(this.price);
  this.updateOnClick(product);
  //this.update();
}

minusPrice(product:Product){
  if(this.price>0){
    this.price -= (product.price*this.piecess[product.idProduct-1]);
    console.log(this.price);
    this.updateOnClick(product);
    //this.update();
  }else{
    this.price=0;
  }
  
}

deleteProduct(product:Product){
  console.log(product);
  this.product.splice((product.idProduct-1),(product.idProduct));
  console.log(this.product);
  this.pieces=0;
}

}
