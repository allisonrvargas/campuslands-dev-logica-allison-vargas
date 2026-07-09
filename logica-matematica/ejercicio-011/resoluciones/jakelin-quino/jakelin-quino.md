## Analisis

- Entrada: Un arreglo con los tipos de golpes disponibles y la longitud de la serie a combinar.
- Proceso: Aplicar la fórmula de variación con repetición (elevar la cantidad de golpes a la potencia de la longitud de la serie).
- Salida: El número total de combinaciones posibles y la complejidad resultante.

## Reglas identificadas

1. El total de combinaciones se calcula como $n^r$, donde $n$ es el número de golpes y $r$ la longitud de la serie.
2. Si el número de combinaciones es superior a 20, la intensidad es "alta complejidad".
3. Si es 20 o menos, es "baja complejidad".

## Pruebas

### Caso normal

Entrada:
golpesDisponibles: ["jab", "cross", "hook"]
longitudSerie: 3

Resultado esperado:
combinaciones_posibles: 27
intensidad: alta complejidad

### Caso borde

Entrada:
golpesDisponibles: ["jab"]
longitudSerie: 2

Resultado esperado:
combinaciones_posibles: 1
intensidad: baja complejidad

## Explicacion final

Para resolver este problema, utilicé la operación matemática de potencia. Como cada posición en la serie de golpes puede ser ocupada por cualquiera de los golpes disponibles, multiplicamos la cantidad de opciones por sí misma tantas veces como la longitud de la serie. Esto nos da el total de combinaciones únicas posibles para el entrenamiento.