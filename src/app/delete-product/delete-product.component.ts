import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductosService } from '../_servicio/productos.service';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.css'
})
export class DeleteProductComponent {
  product_id: number = 0;
  constructor(private servicio:ProductosService){}
  
  deleteProducto(){
    this.servicio.deleteProducto(this.product_id).subscribe();
  }
}
