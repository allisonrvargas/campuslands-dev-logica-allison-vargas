## Analisis

- Entrada: Un arreglo con los puntajes obtenidos en varias partidas de esports.
- Proceso: Calcular el promedio sumando todo y dividiendo por la cantidad. Calcular la mediana ordenando los datos y hallando el centro.
- Salida: Los valores calculados y el estado del equipo.

## Reglas identificadas

1. El promedio es la suma total dividida entre el número de partidas.
2. La mediana es el valor central (o promedio de los dos centrales en listas pares).
3. Si el promedio es mayor a la mediana, el equipo tiene una tendencia de crecimiento positivo.

## Pruebas

### Caso normal

Entrada:
partidas: [10, 20, 30, 40]

Resultado esperado:
promedio: 25
mediana: 25
estado: equipo estable o en descenso

### Caso borde

Entrada:
partidas: [5, 5, 100]

Resultado esperado:
promedio: 36.66
mediana: 5
estado: equipo con crecimiento positivo

## Explicacion final

Para el promedio sumé los elementos del arreglo y dividí por su longitud. Para la mediana, primero ordené el arreglo de menor a mayor y tomé los elementos centrales. Comparé ambos resultados con un 'if' para determinar la tendencia del equipo.