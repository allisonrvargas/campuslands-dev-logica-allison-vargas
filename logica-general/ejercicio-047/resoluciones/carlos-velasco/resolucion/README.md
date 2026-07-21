# Plantilla de solucion

## Analisis

* **Entrada**: Un arreglo de objetos `canciones`, donde cada uno contiene `titulo`, `duracion` y `formato`.
* **Proceso**: Auditoría de cada objeto mediante validaciones condicionales secuenciales para detectar errores en campos requeridos, integridad numérica o compatibilidad de formatos.
* **Salida**: Un nuevo arreglo de objetos que detalla el `titulo`, el `estado` (Ok/Inconsistente) y el `motivo` del error, si existe.

## Reglas identificadas

1. El título debe existir y no ser una cadena vacía o solo espacios en blanco.
2. La duración debe ser un valor mayor a 0 para no ser considerada "Corrupta".
3. El formato del archivo debe coincidir con los tipos permitidos: "mp3", "wav" o "flac".

## Pruebas

### Caso normal

* **Entrada**: `{ titulo: "Bohemian Rhapsody", duracion: 354, formato: "mp3" }`
* **Resultado esperado**: `{ titulo: "Bohemian Rhapsody", estado: "Ok", motivo: "Sin errores" }`

### Caso borde

* **Entrada**: `{ titulo: "Unknown", duracion: 180, formato: "ogg" }`
* **Resultado esperado**: `{ titulo: "Unknown", estado: "Inconsistente", motivo: "Formato no soportado" }`

## Explicacion final

La solución funciona mediante el uso del método `.map()`, el cual recorre toda la lista y evalúa cada canción contra una jerarquía de condiciones (`if-else if`). Esta estructura permite que, ante cualquier incumplimiento de las reglas de negocio, se detenga la evaluación para ese ítem y se asigne el estado de error correspondiente, proporcionando una auditoría clara y automática de la biblioteca musical.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Título válido**: `cancion.titulo && cancion.titulo.trim() !== ""`
* **Duración válida**: `cancion.duracion > 0`
* **Formato válido**: `["mp3", "wav", "flac"].includes(cancion.formato.toLowerCase())`