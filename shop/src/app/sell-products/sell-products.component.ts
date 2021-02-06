import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PRODUCTS } from '../mock-Products';
import { Product } from '../Product';

import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-sell-products',
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css']
})
export class SellProductsComponent implements OnInit {
  addProductsForm: FormGroup;
  products = PRODUCTS;
  submitted = false;

  // itemValue = '';
  items: Observable<any[]>;

  constructor(private fb: FormBuilder, private db: AngularFireDatabase) {
    this.addProductsForm = this.fb.group({
      image: [''],
      productName: ['', Validators.required],
      price: ['', Validators.required],
      storeName: ['', Validators.required],
      amount: ['', Validators.required],
      Details: ['']
    });

    this.items = db.list('items').valueChanges();
  }

  ngOnInit(): void {
  }

  get f() { return this.addProductsForm.controls; }

  onSubmit() {
    if (
      this.addProductsForm.controls['image'].value !== null &&
      this.addProductsForm.controls['productName'].value !== null &&
      this.addProductsForm.controls['price'].value !== null &&
      this.addProductsForm.controls['storeName'].value !== null &&
      this.addProductsForm.controls['amount'].value !== null &&
      this.addProductsForm.controls['image'].value !== '' &&
      this.addProductsForm.controls['productName'].value !== 'null' &&
      this.addProductsForm.controls['price'].value !== 'null' &&
      this.addProductsForm.controls['storeName'].value !== 'null' &&
      this.addProductsForm.controls['amount'].value !== 'null'
    ) {
      this.products.push(this.addProductsForm.value)
      this.db.list('items').push(this.addProductsForm.value);
      // this.itemValue = '';
      console.log(this.products)
    }
    this.submitted = true;
    if (this.addProductsForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)')
  }

  clear() {
    this.addProductsForm.controls['image'].setValue(null);
    this.addProductsForm.controls['productName'].setValue(null);
    this.addProductsForm.controls['price'].setValue(null);
    this.addProductsForm.controls['storeName'].setValue(null);
    this.addProductsForm.controls['amount'].setValue(null);
    this.addProductsForm.controls['Details'].setValue(null);
  }

 

  


}
