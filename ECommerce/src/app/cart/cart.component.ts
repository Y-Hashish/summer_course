import { Component, OnInit } from '@angular/core';
import { ServiceService as ServiceService } from '../service/service.service';
import { NavbarComponent } from "../navbar/navbar.component";
import { Title } from '@angular/platform-browser';
import { S2Service } from '../service/s2.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [NavbarComponent,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cart: any[] = [];
  editedCartItem: any = {};

  constructor(public cartService: S2Service) { }

  ngOnInit(): void {
    // Retrieve cart from localStorage
    const storedCart = this.cartService.getItem('cart');
    if (storedCart) {
      this.cart = storedCart;
    }
  }

  saveCart(): void {
    // Save cart to localStorage
    this.cartService.setItem('cart', this.cart);
  }

  clearCart(): void {
    // Clear cart from localStorage
    this.cartService.removeItem('cart');
    this.cart = [];
  }

  addCartItem(newCartItem: any): void {
    // Add new cart item to the array
    this.cart.push(newCartItem);
    // Save the updated array to localStorage
    this.saveCart();
    alert("item added successfully ")
  }

  removeCartItem(index: number): void {
    // Remove cart item from the array
    this.cart.splice(index, 1);
    // Save the updated array to localStorage
    this.saveCart();
  }

  editCartItem(updatedCartItem: any, index: number): void {
    // Update cart item at specified index
    this.cart[index] = updatedCartItem;
    // Save the updated array to localStorage
    this.saveCart();
  }

  setEditedCartItem(cartItem: any, index: number): void {
    // Set the cart item to be edited
    this.editedCartItem = { ...cartItem, index };
  }

  updateCartItem(): void {
    if (this.editedCartItem.index !== undefined) {
      this.editCartItem(this.editedCartItem, this.editedCartItem.index);
      this.editedCartItem = {}; // Clear the edited cart item after update
    }
  }
}