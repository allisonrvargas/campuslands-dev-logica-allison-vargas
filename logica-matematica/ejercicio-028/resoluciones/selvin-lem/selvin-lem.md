# Logica matematica 028 - patrones de puntuacion (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 008, pero se subio la dificultad organizando el codigo en funciones (promedio, mediana, validacion) y combinando dos condiciones: la dominancia de picos frente al promedio, y el equilibrio del patron entre picos y valles. Se agrego el caso especial de valores neutros (iguales al promedio, no cuentan como pico ni valle), y validaciones para valores negativos o no numericos y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `promedio` y contar `picos` (>promedio) y `valles` (<promedio); los iguales quedan neutros.
4. Calcular `proporcion_picos`, `proporcion_valles` y `equilibrio_patron = 1 - |proporcion_picos - proporcion_valles|`.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `proporcion_picos >= 0.5` y `equilibrio_patron >= 0.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → proporcion_picos 0.5, equilibrio_patron 1, puntaje_final 27, clasificacion competitivo.
- Caso especial (patron desequilibrado): `[10,10,90]`, bono 0, penalizacion 0 → equilibrio bajo.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.