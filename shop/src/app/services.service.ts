import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // getMenu() {
  //   return new Promise((rexolve, reject) => {
  //     this.db.list('Menu').valueChanges().subscribe(value => {
  //       rexolve(value);
  //     });
  //   });

  // }

  // addOrder(Order, idOrder) {
  //   console.log("IDorder", idOrder);
  //   return this.db.object('Order/' + String(idOrder)).set(Order);

  // }
  // await this.ServicesService.getMenu().then(value)
  // }
  
  private dbPath = '/cart';
 
  productRef: AngularFireList<Product>;
 
  constructor(private db: AngularFireDatabase) {
    this.productRef = db.list(this.dbPath);
  }
 
  createProduct(product: Product): void {
    this.productRef.push(product);
  }
 
  updateProduct(key: string, value: any): Promise<void> {
    return this.productRef.update(key, value);
  }
 
  deleteProduct(key: string): Promise<void> {
    return this.productRef.remove(key);
  }
 
  getProductsList(): AngularFireList<Product> {
    return this.productRef;
  }
 
  deleteAll(): Promise<void> {
    return this.productRef.remove();
  }
  

}
