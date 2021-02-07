import { Component } from '@angular/core';
// import { AngularFireDatabase,AngularFireDatabaseModule,AngularFireList } from 'angularfire2/database';
// import { Observable } from 'rxjs'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shop';
  // shopDb: any[];
  // constructor(db: AngularFireDatabase) {
  //   db.list('/ชำระสินค้า')
  //   .subscribe(shoppingDb => {this.shopDb = shoppingDb;
  //       console.log(this.shopDb)
  //     });
  // }
  // // public shoppingDb!: Observable<any>[];

  // // constructor (afDb: AngularFireDatabase) {

  // //   const itemsRef: AngularFireList<any> = afDb.list('Product payment');
  // //   itemsRef.valueChanges().subscribe(
  // //        x =>{ this.shoppingDb =  x;}
  // //     );
  // }
}

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }
