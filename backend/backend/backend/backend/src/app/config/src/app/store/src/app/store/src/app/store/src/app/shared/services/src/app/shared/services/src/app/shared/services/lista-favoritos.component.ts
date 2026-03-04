import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { agregarLeerAhora } from '../../../../store/leer-ahora.actions';
import { AppState } from '../../../../store/app.state';
import { ApplicationSettings } from '@nativescript/core';

@Component({
  selector: 'ns-lista-favoritos',
  templateUrl: './lista-favoritos.component.html'
})
export class ListaFavoritosComponent implements OnInit {
  favoritos: any[] = [];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    const guardados = ApplicationSettings.getString('favoritos', '[]');
    this.favoritos = JSON.parse(guardados);
  }

  leerAhora(item: any) {
    this.store.dispatch(agregarLeerAhora({ item }));
  }
}
