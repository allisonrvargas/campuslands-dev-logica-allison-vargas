# Logica matematica 038 - normalizacion de puntajes (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 018, pero se subio la dificultad organizando el codigo en funciones (normalizacion min-max, mediana, validacion) y combinando dos condiciones: el promedio normalizado del grupo, y la proporcion de soldaduras que caen en zona sobresaliente (normalizado >= 70). Se agrego el caso especial de rango 0 (todos los valores iguales, todos quedan en 100), y validaciones para valores negativos o no numericos y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Normalizar cada valor a escala 0-100 con `normalizarMinMax()` (100 para todos si el rango es 0).
4. Calcular `promedio_normalizado` y `proporcion_sobresalientes` (normalizado >= 70).
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `promedio_normalizado >= 50` y `proporcion_sobresalientes >= 0.25`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → promedio_normalizado 51.39, proporcion_sobresalientes 0.5, puntaje_final 27, clasificacion competitivo.
- Caso especial (mayoria de puntajes bajos): `[10,12,14,90]`, bono 0, penalizacion 0 → proporcion_sobresalientes baja.
- Caso borde (rango 0): `[20,20,20]`, bono 5, penalizacion 2 → proporcion_sobresalientes 1.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.