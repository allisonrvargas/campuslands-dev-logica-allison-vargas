## Analisis

- Entrada: La velocidad en kilómetros por hora (km/h).
- Proceso: Multiplicar la velocidad por el factor de conversión (0.621371) y clasificar el resultado.
- Salida: La velocidad en millas por hora y su clasificación.

## Reglas identificadas

1. La conversión se hace multiplicando km/h por 0.621371.
2. Si la velocidad en mph es mayor a 250, se etiqueta como "hyper-speed".
3. Si es 250 o menos, se etiqueta como "standard-speed".

## Pruebas

### Caso normal

Entrada:
velocidadKmh: 400

Resultado esperado:
velocidad_mph: 248.55
clasificacion: standard-speed

### Caso borde

Entrada:
velocidadKmh: 500

Resultado esperado:
velocidad_mph: 310.69
clasificacion: hyper-speed

## Explicacion final

Para resolver este problema, apliqué la fórmula de conversión matemática necesaria para cambiar de una unidad de medida a otra. Luego, utilicé un condicional 'if-else' para evaluar el resultado numérico y asignar una etiqueta categórica según los criterios establecidos.