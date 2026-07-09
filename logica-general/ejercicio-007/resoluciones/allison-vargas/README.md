# Plantilla de solucion

## Analisis

- **Entrada:** Un arreglo de objetos (`playlist`) donde cada elemento contiene propiedades de una pista musical (titulo, artista, duracion).
- **Proceso:** Validar la existencia de elementos en la lista. Posteriormente, inspeccionar secuencialmente cada objeto aplicando filtros condicionales para capturar propiedades vacías o valores numéricos fuera de rango lógico.
- **Salida:** Un reporte detallado con las inconsistencias encontradas y sus posiciones correspondientes, o una notificación de éxito si la estructura se encuentra en un estado íntegro.

## Reglas identificadas

1. **Protección de Estructura:** Si el arreglo original carece de registros, el algoritmo cancela el escaneo informando que no hay datos para auditar.
2. **Consistencia de Identidad:** El título de la pista es obligatorio; campos nulos, indefinidos o compuestos puramente por espacios (`.trim()`) se marcan como error.
3. **Consistencia Métrico-Temporal:** La duración de la pista debe corresponder a un tipo numérico estrictamente superior a cero segundos.

## Pruebas

### Caso normal

Entrada:
```javascript
const playlist = [
  { titulo: "La Inocente", artista: "Mora", duracion: 200 },
  { titulo: "", artista: "Desconocido", duracion: 180 },
  { titulo: "Reina", artista: "Mora", duracion: -5 },
  { titulo: "Memorias", artista: "Mora", duracion: 195 }
];


Resultado esperado:
JSON
[
  {
    "posicion": 1,
    "error": "Título ausente",
    "detalle": "La canción no cuenta con un nombre o el campo está vacío."
  },
  {
    "posicion": 2,
    "cancion": "Reina",
    "error": "Duración inválida",
    "detalle": "La duración debe ser un número mayor a cero. Valor recibido: -5"
  }
]
Caso borde
Entrada:

JavaScript
const playlist = [];
Resultado esperado
JSON
{
  "accion": "omitir revisión",
  "motivo": "La playlist está vacía o no se recibió una colección válida."
}
Explicacion final
La solución es efectiva porque implementa un escaneo lineal iterativo mediante .forEach(), permitiendo registrar múltiples inconsistencias simultáneamente en una sola pasada en lugar de frenar el programa ante el primer error. Al aislar las validaciones de cadenas vacías y duraciones negativas dentro de un arreglo colector indexado, blindamos la base de datos de reproducción musical, garantizando que solo la música con metadatos sanos proceda a las colas de streaming.