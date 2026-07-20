# Resolución: Reto Tatuajes - JS

## Pensamiento del problema
El reto se divide en dimensiones geométricas y factores de valor agregado (tipo de estilo). La estructura de un objeto `multiplicadores` permite escalar el código si se agregan más estilos en el futuro.

## Reglas aplicadas
1. Cálculo de área y perímetro estándar.
2. Escalamiento de costos según complejidad.
3. Descuento aplicado condicionalmente según el perímetro (regla de pieza grande).

## Casos probados
1. **Normal:** 5x5 lineal. Área 25cm2, Perímetro 20cm.
2. **Caso borde:** 20x20 realismo. Área 400cm2, Perímetro 80cm (aplica descuento).