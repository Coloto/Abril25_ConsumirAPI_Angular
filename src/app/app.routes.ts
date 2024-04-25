import { Routes } from '@angular/router';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { BotonesComponent } from './botones/botones.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';

export const routes: Routes = [
    {path: 'botones', component: BotonesComponent},
    {path: 'lista-productos', component: ListaProductosComponent},
    {path: 'add-producto', component: AddProductoComponent},
    {path: 'delete-producto', component: DeleteProductComponent}
];
