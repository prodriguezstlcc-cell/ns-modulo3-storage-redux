# Módulo 3 — Storage y Redux

Proyecto NativeScript Angular — Módulo 3.

## Requisitos implementados

1. API Express con GET y filtrado por querystring
2. Listado con formulario de búsqueda funcional
3. Variable de configuración con URL de Ngrok en app.config.ts
4. ApiService que realiza las solicitudes HTTP
5. Settings con AppSettings para leer nombre de usuario
6. Pantalla de edición de nombre persistente
7. Ícono favorito en el listado de búsqueda
8. Favoritos listados en componente de favoritos
9. Botón "Leer ahora" que despacha action al store Redux
10. Pantalla Home con listado reactivo usando store.select

## Correr el backend
```
cd backend
npm install
node server.js
```
La API queda en: http://localhost:3000/api/items
