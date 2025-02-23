import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { INoticia } from './interfaces/inoticia.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  arrNoticias: INoticia[] = [
    { titulo: "El riesgo de que el asteroide 2024 YR4 choque contra la Tierra ya es el más alto jamás registrado", imagen: "https://th.bing.com/th/id/OSK.HEROsmvbJ-emGbdV3n71rJxtB7wBdqvkdf4vJ3nti_ZgnI0?rs=1&pid=ImgDetMain", texto: "El asteroide 2024 YR4, descubierto recientemente, tiene ahora un 3,1% de posibilidades de impactar contra la Tierra el 22 de diciembre de 2032, el nivel más alto jamás registrado desde que se hacen este tipo de mediciones, según los cálculos que la NASA proporcionó el martes.", fecha: "2018-03-16"},
    { titulo: "Ultima hora de la guerra de Ucrania", imagen: "https://th.bing.com/th/id/OIP.5HJRPil-CJMidUN8ykuH_wHaEK?rs=1&pid=ImgDetMain", texto: "Con la intensificación de los ataques, especialmente con drones, y la reciente autorización de Ucrania para usar misiles de largo alcance en territorio ruso, el conflicto parece lejos de terminar.", fecha: "2018-03-16"}
  ];

  obtenerDatos(event: INoticia) {
    this.arrNoticias = [...this.arrNoticias, event];
  }



}
