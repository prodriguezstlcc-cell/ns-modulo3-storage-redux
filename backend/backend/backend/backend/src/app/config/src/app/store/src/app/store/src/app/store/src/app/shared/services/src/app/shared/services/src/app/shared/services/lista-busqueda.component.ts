import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../shared/services/api.service';

@Component({
  selector: 'ns-lista-busqueda',
  templateUrl: './lista-busqueda.component.html'
})
export class ListaBusquedaComponent implements OnInit {
  query: string = '';
  resultados: any[] = [];
  favoritos: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    this.apiService.buscarItems(this.query).subscribe(data => {
      this.resultados = data;
    });
  }

  toggleFavorito(item: any) {
    const existe = this.favoritos.find(f => f.id === item.id);
    if (existe) {
      this.favoritos = this.favoritos.filter(f => f.id !== item.id);
    } else {
      this.favoritos.push(item);
    }
  }

  esFavorito(item: any): boolean {
    return !!this.favoritos.find(f => f.id === item.id);
  }
}
