import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaProductosComponent } from "./lista-productos/lista-productos.component";
import { BotonesComponent } from "./botones/botones.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ListaProductosComponent, BotonesComponent]
})
export class AppComponent {
  title = 'Abril25_ConsumirAPI';
}
