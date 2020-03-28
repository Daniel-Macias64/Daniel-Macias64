import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RespuestaNoticias } from '../interfaces/interface';
import { environment } from '../../environments/environment';


const apiUrl = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  obtenerTitulares() {
    return this.http.get<RespuestaNoticias>(`${ apiUrl }/etiquetas`);
  }

  obtenerTitularesPorCategoria( tipo: string) {
    return this.http.get<RespuestaNoticias>(`${ apiUrl }/etiquetas?tipo=${ tipo }`);
  }
}
