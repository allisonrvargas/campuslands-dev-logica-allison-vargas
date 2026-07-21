# Ranking de Fútbol Sala - Efectividad

## Descripción
Calculadora de efectividad para equipos de fútbol sala basada en la relación entre puntos obtenidos y puntos posibles.

## Reglas
- Fórmula: (Puntos / (Partidos * 3)) * 100.
- Categorías basadas en umbrales de desempeño (80%, 50%).

## Casos Probados
1. Normal: 6 puntos de 3 partidos (66.67% -> Competitivo).
2. Borde: 0 partidos (0% -> En desarrollo).

## Ejecución
Llamar a la función `calcularEfectividad(nombre, puntos, partidos)` con los valores correspondientes.
