import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PRODUCTS } from '../mock-Products';


@Component({
  selector: 'app-sell-products',
  templateUrl: './sell-products.component.html',
  styleUrls: ['./sell-products.component.css']
})
export class SellProductsComponent implements OnInit {
  addProductsForm: FormGroup;
  products = PRODUCTS;
  submitted = false;

  constructor(private fb: FormBuilder) { 
    this.addProductsForm = this.fb.group({
      image: ['', Validators.required],
      productName: ['', Validators.required],
      size: ['', Validators.required],
      price: ['', Validators.required],
      storeName: ['', Validators.required],
      amount: ['', Validators.required],
      Details: ['']
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.addProductsForm.controls; }

  onSubmit(){
    this.products.push(this.addProductsForm.value)
    console.log(this.products)

    this.submitted = true;

    if (this.addProductsForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)')

  }

}
