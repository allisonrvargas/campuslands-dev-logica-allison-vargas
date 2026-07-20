# Logica matematica 040 - simulaciones con formulas (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 020, pero se subio la dificultad organizando el codigo en funciones (simulacion de ganancia, mediana, validacion) y combinando dos condiciones: la ganancia promedio simulada, y que tan lejos esta el menu del precio optimo teorico (50, vertice de la parabola precio*(100-precio)). El umbral de desviacion_optimo se ajusto a <=30 para que el ejemplo diera competitivo. Se agregaron validaciones para valores negativos o no numericos, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Simular `ganancia = precio * max(100-precio, 0)` con `simularGanancia()` y `.map()`.
4. Calcular `ganancia_promedio`.
5. Calcular `desviacion_optimo = promedio(|precio - 50|)`.
6. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
7. Clasificar combinando: `ganancia_promedio >= 1600` y `desviacion_optimo <= 30`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → ganancia_promedio 1626.75, desviacion_optimo 28.75, puntaje_final 27, clasificacion competitivo.
- Caso especial (precios sobre 100, demanda clamp a 0): `[110,120,50]`, bono 0, penalizacion 0.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.