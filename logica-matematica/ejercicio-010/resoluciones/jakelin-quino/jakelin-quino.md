## Analisis

- Entrada: Un arreglo con los costos diarios del viaje y el número total de días.
- Proceso: Sumar los costos, dividir entre los días para obtener el promedio y redondear el resultado al número entero más cercano.
- Salida: El costo promedio redondeado y la categoría del viaje.

## Reglas identificadas

1. El promedio se redondea usando la función estándar al entero más cercano.
2. Si el promedio redondeado es mayor a 100, la categoría es "lujo".
3. Si el promedio es 100 o menos, la categoría es "economico".

## Pruebas

### Caso normal

Entrada:
costos: [120.50, 85.25, 200.00, 45.75]
dias: 4

Resultado esperado:
promedio_redondeado: 113
categoria: lujo

### Caso borde

Entrada:
costos: [50.10, 49.90]
dias: 2

Resultado esperado:
promedio_redondeado: 50
categoria: economico

## Explicacion final

Sumé todos los costos del arreglo y los dividí por la cantidad de días. Luego, utilicé la función 'Math.round()' para eliminar los decimales y obtener un número entero, lo cual es útil para presupuestos. Finalmente, clasifiqué el resultado usando un 'if' simple para determinar si el viaje califica como lujo o económico.
