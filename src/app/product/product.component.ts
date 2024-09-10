import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  products : Product[] = [];

  constructor(private service: ProductService){}

  ngOnInit() {
  this.loadProducts();
  }

  loadProducts() {
    this.service.getProducts().subscribe({
        next: data => this.products = data
    }
    );
  }


  delete(product: Product){
    this.service.delete(product).subscribe({
      next: ()=> this.loadProducts()
    })
  }
}