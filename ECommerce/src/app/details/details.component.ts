import { Component } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service/service.service';
import { producerAccessed } from '@angular/core/primitives/signals';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent extends ProductsComponent {
  id!:any 
  constructor(private rout:ActivatedRoute, public override storageService: ServiceService,public override  s: ServiceService ){
    super(storageService,s);
    this.id= this.rout.snapshot.paramMap.get("id");
    // console.log(this.id);
    
  }

  // override products: { id: number; title: string; price: string; category: string; description: string; image: string; }[] = [];

}
