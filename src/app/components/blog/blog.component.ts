import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

  @Input() listanoticias: INoticia[] = []
  texto: string = ""
  nuevaNoticia: INoticia = {
    titulo: "",
    imagen: "",
    texto: "",
    fecha: ""
  }

  @Output() noticiaEmitida: EventEmitter<INoticia> = new EventEmitter();

  obtenerNoticia() {
    this.noticiaEmitida.emit(this.nuevaNoticia);
    this.nuevaNoticia = {
      titulo: "", 
      imagen: "",
      texto: "",
      fecha: ""
    }
  }

  ngOnChanges() {
    this.texto = "";
    this.texto = this.listanoticias.map(noticia => 
      `<li>
        <h3>${noticia.titulo}</h3>
        <img src="${noticia.imagen}" alt="Imagen de ${noticia.titulo}"
        <p>${noticia.texto}</p>
        <small>${noticia.fecha}</small>
      </li>`
    ).join('');
  }


}



