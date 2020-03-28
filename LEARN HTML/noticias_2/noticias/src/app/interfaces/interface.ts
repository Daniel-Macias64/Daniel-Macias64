export interface RespuestaNoticias {

  etiquetas: Article[];
}

export interface Article {
  id: Source;
  nombre: string;
  tipo?: string;
  Descripcion: string;
  urlToImage: string;
}

export interface Source {
  id?: string;
  tipo: string;
}
