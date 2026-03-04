import { createAction, props } from '@ngrx/store';

export const agregarLeerAhora = createAction(
  '[LeerAhora] Agregar',
  props<{ item: any }>()
);

export const limpiarLeerAhora = createAction(
  '[LeerAhora] Limpiar'
);
