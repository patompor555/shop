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

  price : number = 0;
  pieces : number = 1;
  total_price : number = 0;
  value_check: boolean = false;

  
  constructor() { }

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
  

}
