import { Component, OnInit } from '@angular/core';

/*export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}*/

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  price : number = 229;
  pieces : number = 15;
  total_price : number = 0;
  value_check: boolean = false;
  shipping_cost : number = 25;

  
  constructor() { 
    this.total_price=this.total(this.price, this.pieces);
  }

  ngOnInit(): void {
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
  

}
