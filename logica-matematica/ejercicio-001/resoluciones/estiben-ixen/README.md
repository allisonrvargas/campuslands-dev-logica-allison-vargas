# Plantilla de solucion

## Analisis

- Entrada: `puntosBase` (entero), `eliminaciones` (entero), `muertes` (entero), `esVictoria` (booleano).
- Proceso: Aplicar operaciones aritméticas para sumar bonificaciones y restar penalizaciones, asegurando que el total no sea negativo.
- Salida: Un número entero que representa el puntaje final ajustado.

## Reglas identificadas

1. Victoria: Se otorga un bono fijo de 50 puntos si el resultado es victoria.
2. Rendimiento: Cada eliminación suma 10 puntos, cada muerte resta 5 puntos.
3. Consistencia: El puntaje nunca puede ser inferior a 0 (el mínimo es 0).

## Pruebas

### Caso normal

Entrada:
puntosBase: 100, eliminaciones: 5, muertes: 2, esVictoria: true

Resultado esperado:
190 (100 + 50 + 50 - 10)

### Caso borde

Entrada:
puntosBase: 10, eliminaciones: 0, muertes: 5, esVictoria: false

Resultado esperado:
0 (10 - 25 = -15, ajustado a 0)

## Explicacion final

La solución sigue un flujo de cálculo lineal: primero procesa los bonos/penalizaciones y finalmente aplica una validación de rango (clamping) para garantizar que el resultado no sea un número negativo, lo cual es vital para la integridad de un sistema de ranking competitivo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.