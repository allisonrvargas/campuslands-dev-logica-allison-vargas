## Analisis

- Entrada: `efectividadA` y `efectividadB` (número de puntos ganados de los últimos 100 jugados).
- Proceso: Aplicar la regla de Laplace para eventos equiprobables (casos favorables / casos totales).
- Salida: Un string representando el porcentaje de probabilidad para el Jugador A.

## Reglas identificadas

1. Normalización: La probabilidad se obtiene comparando el rendimiento relativo de ambos jugadores.
2. Caso nulo: Si ambos jugadores tienen 0 puntos de efectividad (inicio de torneo), se asume una probabilidad base del 50%.
3. Precisión: El resultado se redondea a dos decimales para mayor exactitud estadística.

## Pruebas

### Caso normal

Entrada:
efectividadA: 70, efectividadB: 30

Resultado esperado:
"70.00%"

### Caso borde

Entrada:
efectividadA: 0, efectividadB: 0

Resultado esperado:
"50.00%"

## Explicacion final

La solución utiliza el concepto fundamental de probabilidad: $P(A) = \frac{n(A)}{n(A) + n(B)}$. Al dividir los puntos ganados por el jugador A entre el total de puntos disputados por ambos, obtenemos su peso específico en el juego. Es una forma efectiva de modelar el comportamiento del juego basándose en datos históricos.



[Image of probability formula distribution]


## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.