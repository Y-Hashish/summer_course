import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ServiceService } from '../service/service.service';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [ProductsComponent, NavbarComponent],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent extends ProductsComponent {
  override products: { id: number; title: string; price: string; category: string; description: string; image: string; }[] = [];
    
  }