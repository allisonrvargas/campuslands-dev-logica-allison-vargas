# Logica matematica 027 - secuencias numericas (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 007, pero se subio la dificultad organizando el codigo en funciones (diferencias, mediana, validacion) y combinando dos condiciones: la proporcion de tramos crecientes en la secuencia, y la variabilidad de esos cambios. Se agrego el caso especial de secuencia constante (todas las diferencias en 0), y validaciones para valores no numericos y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (minimo 2 elementos, numeros finitos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `diferencias` entre consecutivos con `calcularDiferencias()`.
4. Si todas las diferencias son 0: `proporcion_crecientes = 0`, `variabilidad = 0`.
5. Si no: calcular `proporcion_crecientes` (diferencias positivas / total) y `variabilidad` (desviacion promedio de las diferencias).
6. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
7. Clasificar combinando: `proporcion_crecientes >= 0.6` y `variabilidad <= 2`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → proporcion_crecientes 1, variabilidad 0.67, puntaje_final 27, clasificacion competitivo.
- Caso especial (secuencia decreciente e irregular): `[40,10,35,5]`, bono 0, penalizacion 0.
- Caso borde (secuencia constante): `[15,15,15]`, bono 5, penalizacion 2 → proporcion_crecientes 0, variabilidad 0.