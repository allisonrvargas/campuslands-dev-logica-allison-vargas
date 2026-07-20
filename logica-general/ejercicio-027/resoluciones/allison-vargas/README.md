# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`playlistCanciones`) donde cada pista musical cuenta con un nombre (`titulo`), un autor principal (`artista`) y el tiempo total de reproducción medido en segundos (`duracionSegundos`).
- **Proceso:** Validar que el listado contenga pistas. Recorrer el arreglo con un ciclo examinando celda por celda para hallar valores vacíos en las cadenas de texto o números de tiempo inferiores o iguales a cero.
- **Salida:** Un objeto de diagnóstico que indica si la lista está limpia ("Playlist óptima") o si requiere correcciones ("Inconsistencias detectadas"), detallando la posición exacta de los fallos.

## Reglas identificadas

1. **Filtro de Carga Inicial:** Si la playlist ingresada no contiene ningún elemento para procesar, el sistema frena la auditoría avisando que faltan pistas de audio.
2. **Coherencia Cronológica:** La duración de una canción debe registrarse con un número estrictamente mayor a cero. Valores negativos o nulos se catalogan de inmediato como una inconsistencia técnica.
3. **Metadatos Obligatorios:** El título de la pista y el artista son datos requeridos por el reproductor. Si alguno de estos campos se encuentra ausente o en blanco, la canción se agrega al reporte de errores.

## Pruebas

### Caso normal

Entrada:
```javascript
const playlistCanciones = [
  { titulo: "La Inocente", artista: "Mora", duracionSegundos: 200 },
  { titulo: "Memorias", artista: "Mora", duracionSegundos: 215 }
];
Resultado esperado:
JSON
{
  "estado": "Playlist óptima",
  "motivo": "Todas las canciones del listado cuentan con metadatos válidos y tiempos coherentes."
}
Caso borde
Entrada:

JavaScript
const playlistCanciones = [
  { titulo: "Modelito", artista: "Mora", duracionSegundos: 180 },
  { titulo: "", artista: "Artista Desconocido", duracionSegundos: 210 },
  { titulo: "Tuyo", artista: "", duracionSegundos: -10 }
];
Resultado esperado
JSON
{
  "estado": "Inconsistencias detectadas",
  "pistasSaludables": 1,
  "alertasTotales": 2,
  "detalles": [
    {
      "posicion": 2,
      "pista": "Pista Desconocida",
      "alertas": [
        "Falta el título de la canción"
      ]
    },
    {
      "posicion": 3,
      "pista": "Tuyo",
      "alertas": [
        "Duración inválida o en cero",
        "Falta el artista principal"
      ]
    }
  ]
}
Explicacion final
La solución funciona muy bien porque actúa como un control de calidad automático que escanea la lista de reproducción pista por pista antes de enviarla al reproductor. Al usar condiciones sencillas y bien estructuradas, el programa puede detectar al instante si a una canción le hace falta su título, el nombre del cantante o si tiene un tiempo de duración imposible. Al guardar la posición exacta y el motivo de cada falla, le permite al usuario corregir los archivos corruptos rápidamente, garantizando que la música suene sin interrupciones ni saltos extraños.