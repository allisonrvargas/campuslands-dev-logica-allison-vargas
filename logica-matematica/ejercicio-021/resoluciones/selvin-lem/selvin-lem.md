# Logica matematica 021 - operaciones aritmeticas controladas (analisis)

## Como se planteo el problema
Se partio de la misma base aritmetica del ejercicio 001, pero se subio la dificultad combinando dos condiciones independientes (puntaje_final y consistencia del grupo) para la clasificacion, y se agregaron validaciones de casos especiales: valores no numericos, bono/penalizacion negativos, y puntaje que podria quedar en negativo.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio de numeros finitos.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `promedio` y `desviacion_estandar` del grupo.
4. Calcular `consistencia = 1 - (desviacion_estandar/promedio)` (0 si promedio es 0).
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando dos condiciones: `puntaje_final >= 25` y `consistencia >= 0.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → puntaje_final 27, consistencia 0.68, clasificacion competitivo.
- Caso especial (penalizacion excesiva): `[5,6,7]`, bono 0, penalizacion 50 → puntaje_final se protege en 0.
- Caso especial (bono negativo, se ignora): `[20,20,20]`, bono -10, penalizacion 2.
- Caso borde (array vacio): retorna error controlado.