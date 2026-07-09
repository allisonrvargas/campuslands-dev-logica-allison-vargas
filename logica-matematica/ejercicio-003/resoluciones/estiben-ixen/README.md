# Plantilla de solucion

## Analisis

- Entrada: Un arreglo de números que representan las puntuaciones obtenidas por un jugador en distintas partidas.
- Proceso: Cálculo del promedio aritmético y de la mediana estadística (valor central).
- Salida: Un objeto que contiene los resultados calculados.

## Reglas identificadas

1. Promedio: Suma de todas las puntuaciones dividida por el número total de partidas.
2. Mediana: Valor central de las puntuaciones tras ordenarlas de menor a mayor.
3. Caso par: Si el número de partidas es par, la mediana es el promedio de los dos valores centrales.

## Pruebas

### Caso normal

Entrada:
[1200, 1500, 1000, 2000, 1800]

Resultado esperado:
promedio: 1500, mediana: 1500

### Caso borde

Entrada:
[1000, 2000]

Resultado esperado:
promedio: 1500, mediana: 1500

## Explicacion final

La solución implementa una lógica matemática robusta. Primero, usa `reduce` para el promedio y, posteriormente, ordena el arreglo para aislar el valor central. Esto permite comparar si el promedio es representativo o si está sesgado por puntuaciones extremas (outliers), algo común en torneos de alto nivel.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.