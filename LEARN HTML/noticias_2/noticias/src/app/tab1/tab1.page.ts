import { Component, OnInit} from '@angular/core';
import {NoticiasService} from '../services/noticias.service';
import { Article } from '../interfaces/interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page  implements OnInit {
  noticias: Article [] = [];


  // tslint:disable-next-line: no-shadowed-variable
  constructor(private NoticiasService: NoticiasService) {}
  ngOnInit() {
    this.NoticiasService.obtenerTitulares()
    .subscribe(noticias => {
      console.log('resultados', noticias);
      this.noticias.push(...noticias);

    });
  
  }
}
