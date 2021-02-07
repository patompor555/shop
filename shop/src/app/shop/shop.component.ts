import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { Cart } from '../Cart';
import { PRODUCTS } from '../mock-Products';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  cart = Cart;
  products = PRODUCTS;
  selectedProduct!: Product;
  amount = 1;

  itemValue = '';
  items: Observable<any[]>;
  carts: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {

    this.items = db.list('items').valueChanges();
    this.carts = db.list('carts').valueChanges();
  }

  ngOnInit(): void {
  }

  onSelect(product: Product): void {
    this.selectedProduct = product;
    console.log("passssssss", this.selectedProduct);
  }

  // addAmount() {
  //   this.amount += 1;
  // }

  // decreaseAmount() {
  //   this.amount -= 1;
  //   if (this.amount == 0) {
  //     this.amount = 1;
  //   }
  // }

  onSubmit() {
    this.db.list('carts').push({
      image: this.selectedProduct.image,
      productName: this.selectedProduct.productName,
      price: this.selectedProduct.price,
      storeName: this.selectedProduct.storeName,
      amount: this.amount,
      Details: this.selectedProduct.Details,
    });
    console.log(this.db.list('carts'));
  }



}
