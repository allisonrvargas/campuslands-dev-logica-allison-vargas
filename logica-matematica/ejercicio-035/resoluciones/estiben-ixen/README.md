# Resolución: Reto Dibujo Digital - JS

## Pensamiento del problema
El tiempo de renderizado depende de la carga geométrica (píxeles) y la complejidad del archivo (capas). Se utilizó una lógica de cálculo incremental: Base -> Penalización -> Complejidad -> Optimización por Hardware.

## Reglas aplicadas
1. Escalamiento lineal por píxeles (base).
2. Penalización fija por superación de umbral de memoria (20M px).
3. Incremento porcentual por capas.
4. División por factor de potencia del equipo.

## Casos probados
1. **Normal:** 10M píxeles, 5 capas, potencia 5. Resultado: 6.00 minutos.
2. **Caso borde:** 25M píxeles (aplica penalización), 10 capas, potencia 8.