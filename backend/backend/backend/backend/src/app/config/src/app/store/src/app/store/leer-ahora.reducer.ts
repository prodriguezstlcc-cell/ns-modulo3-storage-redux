import { createReducer, on } from '@ngrx/store';
import { agregarLeerAhora, limpiarLeerAhora } from './leer-ahora.actions';

export const leerAhoraReducer = createReducer(
  [] as any[],
  on(agregarLeerAhora, (state, { item }) => [...state, item]),
  on(limpiarLeerAhora, () => [])
);
