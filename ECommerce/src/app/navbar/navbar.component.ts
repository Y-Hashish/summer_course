import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { provideRouter } from '@angular/router';
import { ProductsComponent } from '../products/products.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent extends LoginComponent {

}
