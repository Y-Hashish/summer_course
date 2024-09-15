import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';

export const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'products',component:ProductsComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'details/:id', component:DetailsComponent},
  {path:"login", component:LoginComponent},
  {path:"cart",component:CartComponent},
  {path:"**",redirectTo:"login" ,pathMatch:"full"}
];
