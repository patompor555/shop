import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { SellProductsComponent } from './sell-products/sell-products.component';
import { AboutComponent } from './about/about.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: 'home-component', component: HomeComponent },
  { path: 'about-component', component: AboutComponent },
  { path: 'shop-component', component: ShopComponent },
  { path: 'sellProducts-component', component: SellProductsComponent },
  { path: 'shoppingCart-component', component: ShoppingCartComponent },
  { path: 'signin-component', component: SigninComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
