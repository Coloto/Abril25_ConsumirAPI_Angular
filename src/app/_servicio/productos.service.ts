import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../_modelo/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  private url:string = 'http://localhost:8081/producto';
  constructor(private http:HttpClient) { }

  allProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.url);
  }

  addProducto(producto: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.url,producto);
  }

  deleteProducto(product_id: number){
    console.log(this.url+"/"+product_id);
    return (this.http.delete(`${this.url}/${product_id}`));
  }
  
}
