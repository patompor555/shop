import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Product } from '../Product';
import { PRODUCTS } from '../mock-Products';
import { Cart } from '../Cart';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products = PRODUCTS;
  productsForm: FormGroup;
  cart = Cart;
  selectedProduct!: Product;
  amount = 1;

  constructor(private fb: FormBuilder,) {
    this.productsForm = this.fb.group({
      image: [''],
      productName: [''],
      size: [''],
      price: [''],
      storeName: ['']
    });
  }

  ngOnInit(): void {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    console.log("passssssss", this.selectedProduct);
  }

  addAmount() {
    this.amount += 1;
  }

  decreaseAmount() {
    this.amount -= 1;
    if (this.amount == 0) {
      this.amount = 1;
    }
  }

  onSubmit() {
    this.cart.push({
      image: this.selectedProduct.image,
      productName: this.selectedProduct.productName,
      size: this.selectedProduct.size,
      price: this.selectedProduct.price,
      storeName: this.selectedProduct.storeName,
      amount: this.amount
    });
    console.log(this.cart);
    // this.productsForm.controls['Queue'].setValue(this.queue);
    // this.cart.push(this.productsForm.value);
    // console.log(this.productsForm.value)
    // this.cart.
    // if( this.cart.amount == 0){
    //   this.cart.amount=1
    // }else{
    //   this.cart.amount+=1
    // }
    // console.log(this.cart)


  }



  // onModal(){
  //   this.Modal.push(this.productsForm.value);
  //   console.log(this.productsForm.value)
  // }





}
