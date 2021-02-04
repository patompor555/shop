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

  price : number = 229.25;
  pieces : number = 1;
  total_price : number = 0;
  value_check: boolean = false;
  shipping_cost : number = 25;
  all_total_price: number = 0.00;
  check: boolean = false;

  
  constructor() { 
    this.total_price=this.total(this.price, this.pieces);
    this.all_total_price=this.all_total(this.price, this.pieces, this.shipping_cost);
    
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

  all_total(price:number, pieces:number, shipping_cost:number){
    sum:Number;
    const sum =((price*pieces)+shipping_cost);
    return sum;
  }
  
  onKey(value: string) {
      this.pieces = Number(value);
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

  box_check(e:any, c:boolean){
    if(e.target.checked){
      this.check = true;
    }else{
      this.check = false; 
    }
    return this.check;
  }

  
  

}
