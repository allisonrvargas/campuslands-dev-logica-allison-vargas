# Resolución Reto 031 - Kickboxing

## Pensamiento del problema
El problema se abordó tratando cada puntaje como un vector individual al que se le aplican transformaciones lineales (suma y resta). La clasificación se determina mediante un promedio grupal para categorizar el desempeño total del equipo en el torneo.

## Reglas aplicadas
1. Transformación individual: $P_i = (P_{inicial} + bono) - penalizacion$
2. Acumulación: Suma total de $P_i$.
3. Clasificación por rangos definidos en la lógica.

## Ejecución
Ejecutar en consola: `node tu-nombre.js`

## Casos Probados
1. Normal: `[12, 18, 25, 30], bono: 8, penalización: 3` -> Resultado: 27 por participante, 108 total, Clasificación: elite.
2. Borde: `[5, 2], bono: 1, penalización: 10` -> Resultado: valores negativos, Clasificación: novato.