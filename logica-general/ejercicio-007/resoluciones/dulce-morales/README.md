# Plantilla de solucion

## Analisis

- Entrada: Un objeto `playlistDatos` con las propiedades `nombre` (texto), `totalCanciones` (número), `duracionTotalSegundos` (número) y un arreglo `cancionesLista` con las canciones reales añadidas.
- Proceso: Comparar la cantidad de elementos dentro del arreglo de canciones contra el contador declarado, y auditar que la suma de las duraciones individuales coincida con el total reportado.
- Salida: Un objeto que indica si la lista de reproducción es consistente, el estado del escaneo de metadatos y el motivo detallado de la auditoría.

## Reglas identificadas

1. Regla de Sincronización de Archivos: El tamaño real del arreglo `cancionesLista` debe coincidir exactamente con el número guardado en la propiedad `totalCanciones`.
2. Regla de Coherencia de Tiempo: La suma aritmética de la duración de cada canción individual debe ser exactamente igual a `duracionTotalSegundos`. Si difiere, se detecta un desfase de sincronización en la caché de la playlist.

## Pruebas

### Caso normal

Entrada:
playlistDatos: {
  nombre: "Coding Hits",
  totalCanciones: 2,
  duracionTotalSegundos: 380,
  cancionesLista: [
    { titulo: "Lo-Fi Beats", duracion: 180 },
    { titulo: "Synthwave Code", duracion: 200 }
  ]
}

Resultado esperado:
esConsistente: true
estadoPlaylist: "sincronizado"
motivo: "Los metadatos e inventario de la playlist 'Coding Hits' coinciden perfectamente con los archivos físicos."

### Caso borde

Entrada:
playlistDatos: {
  nombre: "Chill Mix",
  totalCanciones: 3,
  duracionTotalSegundos: 400,
  cancionesLista: [
    { titulo: "Song A", duracion: 150 }
  ]
}

Resultado esperado:
esConsistente: false
estadoPlaylist: "error_inconsistencia"
motivo: "Discrepancia detectada: El contador indica 3 canciones pero el reproductor solo contiene 1 elemento."

## Explicacion final

La solución funciona porque actúa como un validador cruzado de datos redundantes (Checksum de Metadatos). Al inspeccionar de manera independiente el conteo del arreglo y realizar un acumulador mediante un ciclo para verificar los tiempos de reproducción, el código logra desenmascarar errores de caché o cargas corruptas en el reproductor musical antes de iniciar el streaming.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.