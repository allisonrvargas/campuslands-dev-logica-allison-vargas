# Plantilla de solucion

## Analisis

- Entrada: Un arreglo de objetos, donde cada objeto representa una canción con `id`, `nombre` y `duracionSegundos`.
- Proceso: Identificar elementos que violan las reglas de integridad de datos definidas.
- Salida: Un nuevo arreglo con las canciones que presentan inconsistencias.

## Reglas identificadas

1. Duración: La duración no puede ser menor o igual a cero.
2. Nombre: El nombre de la canción no puede estar vacío o contener solo espacios.
3. Identificador: No se permiten canciones con el mismo `id` dentro de la misma lista.

## Pruebas

### Caso normal

Entrada:
{ id: 4, nombre: "Somebody to Love", duracionSegundos: 296 }

Resultado esperado:
[] (Arreglo vacío, ya que la canción es válida)

### Caso borde

Entrada:
{ id: 5, nombre: "", duracionSegundos: 0 }

Resultado esperado:
[{ id: 5, nombre: "", duracionSegundos: 0 }] (Detecta múltiples errores: nombre vacío y duración inválida)

## Explicacion final

La solución utiliza el método `.filter()` para iterar sobre la lista y aplicar condiciones de validación lógica. Si alguna de las reglas (duración, nombre o duplicidad de ID) devuelve `true`, la canción es marcada como inconsistente. Esto permite limpiar los datos antes de realizar operaciones de reproducción o ranking.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
