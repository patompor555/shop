import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PRODUCTS } from '../mock-Products';
import { Product } from '../Product';
import { Cart } from '../Cart';
import { from, pairs } from 'rxjs';


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

  constructor(private fb: FormBuilder,) { 
    this.productsForm = this.fb.group({
      idProduct: [],
      image: [''],
      productName: [''],
      size: [''],
      price: [''],
      storeName: ['']
    });

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
    const sum =(price*pieces);
    return sum;
  }

  all_total(price:number, pieces:number, shipping_cost:number){
    sum:Number;
    const sum =((price*pieces)+shipping_cost);
    return sum;
  }
  
  onKey(value: string, product: Product) {
      for(let i =0; i<this.product.length;i++){
        this.piecess[i]=i;
      }
      this.onSelect(product);
      this.piecess[(product.idProduct)-1]= Number(value);
      this.update(); 
  }

  update(){
    this.pieces_check(this.pieces);
    this.total_price=this.total(this.price, this.pieces);
    this.all_total_price=this.all_total(this.price, this.pieces, this.shipping_cost);
  }

  onclick_plus(value: string){
    this.pieces=(Number(value)+1);
    this.update(); 
  }

  onclick_minus(value: string){
    this.pieces=(Number(value)-1);
    this.update(); 
  }
  
  pieces_check(check:number){
    if(check <= 0){
      this.pieces= 1;
    }else{
      this.pieces= check;
    }
  }

  box_check(e:any, c:boolean, product: Product){
    if(e.target.checked){
      this.check = true;
      this.onSelect(product);
      this.plusPrice();
    }else{
      this.check = false;
      this.onSelect(product); 
      this.minusPrice();
    }
    return this.check;
  }
  

onSelect(product: Product): void {
  this.selectedProduct = product;
  console.log("passssssss", this.selectedProduct);
}

plusPrice(){
  this.price += this.selectedProduct.price
  console.log(this.price);
  this.update()
}

minusPrice(){
  if(this.price>0){
    this.price -= this.selectedProduct.price
    console.log(this.price);
    this.update()
  }else{
    this.price=0;
  }
  
}

deleteProduct(product:Product){
  console.log(product);
  this.product.splice((product.idProduct-1),(product.idProduct));
  console.log(this.product);
}

}
