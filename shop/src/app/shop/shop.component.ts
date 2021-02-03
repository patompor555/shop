import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { Products } from '../Products';
import { Cart } from '../Cart';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products = Products;
  productsForm: FormGroup;
  cart = Cart;
  Modal = [
    {
      image_M: "",
      productName_M: "",
      size_M: "",
      price_M: "",
      storeName_M: "",
  }
  ];

  constructor(private fb: FormBuilder) { 
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

  onSubmit(){
    // this.productsForm.controls['Queue'].setValue(this.queue);
    this.cart.push(this.productsForm.value);
    console.log(this.productsForm.value)
  }

  onModal(){
    this.Modal.push(this.productsForm.value);
    console.log(this.productsForm.value)
  }



}
