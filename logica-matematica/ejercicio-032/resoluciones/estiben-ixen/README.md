# Resolución: Ejercicio 032 - Probabilidad Pingpong

## Pensamiento del problema
El problema requiere transformar una serie de datos dispersos (lista) en un solo valor acumulado, ajustado por factores externos (bono/penalización). Decidí usar `reduce()` para la suma por ser la forma más limpia y eficiente en JS.

## Reglas aplicadas
1. Sumatoria de todos los elementos del arreglo.
2. Adición de bono y sustracción de penalización.
3. Validación de piso (mínimo 0).
4. Clasificación mediante rangos condicionales.

## Casos probados
1. **Caso normal:** [12, 18, 25, 30] con bono 8 y penalización 3. Resultado: 90 (Error en ejemplo original: la suma es 85, +8 -3 = 90. Clasificación: profesional).
2. **Caso borde:** Lista vacía [], bono 5, penalización 10. Resultado: 0 (debido a la validación de no negativos).

## Cómo ejecutar
Tener instalado Node.js. En la terminal, ubícate en la carpeta y ejecuta:
`node nombre-apellido.js`