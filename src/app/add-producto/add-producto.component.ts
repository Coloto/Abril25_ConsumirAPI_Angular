import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../_modelo/producto';
import { ProductosService } from '../_servicio/productos.service';

@Component({
  selector: 'app-add-producto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-producto.component.html',
  styleUrl: './add-producto.component.css'
})
export class AddProductoComponent {
  producto: Producto = {
    product_id: 0,
    product_name: '',
    supplier_id: 0,
    category_id: 0,
    quantity_per_unit:'',
    unit_price: 0,
    units_in_stock: 0,
    units_on_order: 0,
    reorder_level:0,
    discount: 0
  };
  constructor(private servicio:ProductosService){}

  agregarProducto(){
    console.log(this.producto);
    this.servicio.addProducto(this.producto).subscribe(data => console.log(data));
  }
}
