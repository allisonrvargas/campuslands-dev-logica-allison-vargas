# Plantilla de solucion

## Analisis
El problema se diseñó para optimizar y validar la secuencia de reproducción (*reproducción continua*) en una playlist musical digital. Para evitar la fatiga auditiva del usuario, el sistema analiza el orden de las canciones según sus géneros o identificadores secuenciales, asegurando que no existan patrones repetitivos monótonos (como tres canciones seguidas del mismo ritmo) y calculando la duración total acumulada de la cola de reproducción actual.

- Entrada: Una lista de objetos que representan las canciones (cada una con un `id`, `genero` en texto y `duracionSegundos` en entero).
- Proceso: 
  1. Validar que la lista de reproducción contenga elementos.
  2. Iterar linealmente sobre la secuencia para sumar los tiempos de reproducción.
  3. Evaluar de forma consecutiva las canciones: si tres canciones seguidas comparten el mismo género exacto, la secuencia rompe la regla de variedad y se marca como "Fatiga Auditiva Detectada".
- Salida: Un objeto con la duración total de la playlist en formato legible (minutos y segundos) y el estado de validación del orden secuencial.

## Reglas identificadas
1. Filtro de Fatiga Secuencial: Si existen tres elementos consecutivos con el mismo género ($genero_{i} == genero_{i+1} == genero_{i+2}$), el estado de la playlist cambia a `"Reordenar"`. De lo contrario, se mantiene como `"Fluido"`.
2. Control de Lista Vacía: Si la playlist no tiene canciones registradas, el tiempo total es 0 y el estado devuelto es `"Vacía"`.
3. Conversión de Tiempos: La suma total de segundos debe transformarse en una cadena formateada como `MM:SS` para su correcta visualización en la interfaz del reproductor.

## Pruebas

### Caso normal (Secuencia variada y fluida)
Entrada: playlist = `[{id: 1, genero: "Rap", duracionSegundos: 180}, {id: 2, genero: "Trap", duracionSegundos: 150}, {id: 3, genero: "Rap", duracionSegundos: 200}]`
Resultado esperado: { "duracionTotal": "08:50", "estadoSecuencia": "Fluido" }

### Caso con fatiga auditiva
Entrada: playlist = `[{id: 1, genero: "Pop", duracionSegundos: 120}, {id: 2, genero: "Pop", duracionSegundos: 180}, {id: 3, genero: "Pop", duracionSegundos: 150}]`
Resultado esperado: { "duracionTotal": "07:30", "estadoSecuencia": "Reordenar" }

## Explicacion final
La solución funciona porque realiza un recorrido de ventana móvil ($size = 3$) para inspeccionar la homogeneidad de la secuencia, acumulando de manera paralela las métricas temporales de las pistas de audio.