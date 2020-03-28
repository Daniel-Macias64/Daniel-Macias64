import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../services/noticias.service';
import { Article } from '../interfaces/interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment, { static: true}) segment: IonSegment;

  etiquetas: string[] = [ 'Elemento raíz', 'Metadatos del documento', 'Secciones', 'Agrupación de Contenido', 'Semántica a lvl de Texto']
  noticias: Article[] = [];

  constructor( private noticiasService: NoticiasService) {}

  ngOnInit() {
    this.segment.value = this.etiquetas[0];
    this.CargarNoticias(this.segment.value);
  }

  CambiarCategoria(event) {
    this.noticias = [];
    this.CargarNoticias( event.detail.value );
  }

  CargarNoticias(tipo: string ) {
    this.noticiasService.obtenerTitularesPorCategoria(tipo)
      .subscribe(resp => {
        this.noticias.push(...resp);

      });
  }

}
