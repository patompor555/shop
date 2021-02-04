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
  selectedProduct!: Product ;

  constructor(private fb: FormBuilder, ) {
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

  onSubmit() {
    // this.productsForm.controls['Queue'].setValue(this.queue);
    this.cart.push(this.productsForm.value);
    console.log(this.productsForm.value)
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    console.log("passssssss", this.selectedProduct)
  }

  // onModal(){
  //   this.Modal.push(this.productsForm.value);
  //   console.log(this.productsForm.value)
  // }





}
