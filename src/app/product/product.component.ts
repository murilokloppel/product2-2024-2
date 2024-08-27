import { Component } from '@angular/core';
import { product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {


  products : product[] = [

    {   "id": 1,
        "name": "ComputadosI7",
        "price": 6000.00,
        "category": "Eletronics"      
    },
    {
      "id": 2,
        "name": "Camisa GG Branca",
        "price": 40.00,
        "category": "Vestuário" 
    },
    {
      "id": 3,
        "name": "Sorvete de Pistache",
        "price": 33.45,
        "category": "Alimentos" 
    }
  ];
}
