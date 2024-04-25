import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Producto } from '../_modelo/producto';
import { ProductosService } from '../_servicio/productos.service';

@Component({
  selector: 'app-lista-productos',
  standalone: true,
  imports: [],
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.css'
})
export class ListaProductosComponent implements OnInit{
  productos: Producto[] = [];
  constructor(private servicio:ProductosService){}

  ngOnInit(): void {
    this.servicio.allProductos()
    .subscribe(data => this.productos = data);
  }

  deleteProducto(product_id: number){
    this.servicio.deleteProducto(product_id).subscribe();
  }
}
