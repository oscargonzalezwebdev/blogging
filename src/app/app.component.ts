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
    { titulo: "Asteroide destruirá la Tierra", imagen: "https://th.bing.com/th/id/OSK.HEROsmvbJ-emGbdV3n71rJxtB7wBdqvkdf4vJ3nti_ZgnI0?rs=1&pid=ImgDetMain", texto: "fdweawerfewqrgfewrg", fecha: "21/02/2025"},
    { titulo: "Ultima hora de la guerra de Ucrania", imagen: "https://th.bing.com/th/id/OIP.5HJRPil-CJMidUN8ykuH_wHaEK?rs=1&pid=ImgDetMain", texto: "fdweawerfewqrgfewrg", fecha: "20/02/2025"}
  ]
}
