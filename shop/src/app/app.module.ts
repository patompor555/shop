import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SellProductsComponent } from './sell-products/sell-products.component';
import { AboutComponent } from './about/about.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SigninComponent } from './signin/signin.component';
import { ShippingCartComponent } from './shipping-cart/shipping-cart.component';
// import { AngularFireModule } from '@angular/fire';
// import { AngularFireDatabaseModule } from '@angular/fire/database';

// export const firebaseConfig = {
//   apiKey: "AIzaSyC0G7V0REDrZvRM9HgxbEXi-UsW5rvF03o",
//   authDomain: "test-firebase-realtime-web.firebaseapp.com",
//   databaseURL: "https://test-firebase-realtime-web-default-rtdb.firebaseio.com",
//   projectId: "test-firebase-realtime-web",
//   storageBucket: "test-firebase-realtime-web.appspot.com",
//   messagingSenderId: "442398714466",
//   appId: "1:442398714466:web:913ae925d845d6237f3f3b",
//   measurementId: "G-Q7LRCHPBKM"
// }

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    SellProductsComponent,
    AboutComponent,
    ShoppingCartComponent,
    SigninComponent,
    ShippingCartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
