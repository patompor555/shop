import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SellProductsComponent } from './sell-products/sell-products.component';
import { AboutComponent } from './about/about.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    SellProductsComponent,
    AboutComponent,
    ShoppingCartComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
