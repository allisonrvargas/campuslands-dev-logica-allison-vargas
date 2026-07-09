## Analisis

- Entrada: Coordenadas (x1, y1) del centro y coordenadas (x2, y2) del paracaidista.
- Proceso: Aplicar el teorema de Pitágoras para calcular la distancia entre los dos puntos: $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$.
- Salida: La distancia calculada y el estado del aterrizaje.

## Reglas identificadas

1. La distancia se calcula basándose en la diferencia de coordenadas.
2. Si la distancia es menor o igual a 5 unidades, el aterrizaje es "preciso".
3. Si la distancia es mayor a 5, el aterrizaje está "fuera de rango".

## Pruebas

### Caso normal

Entrada:
x1: 0, y1: 0
x2: 3, y2: 4

Resultado esperado:
distancia_al_centro: 5
estado: aterrizaje preciso

### Caso borde

Entrada:
x1: 0, y1: 0
x2: 5, y2: 0

Resultado esperado:
distancia_al_centro: 5
estado: aterrizaje preciso

## Explicacion final

Para este problema, utilicé la fórmula de la distancia euclidiana. Calculé la diferencia entre las coordenadas, elevé al cuadrado, sumé los resultados y finalmente apliqué la raíz cuadrada. Comparé el valor resultante contra el límite de 5 unidades mediante un 'if' para determinar la efectividad del aterrizaje.