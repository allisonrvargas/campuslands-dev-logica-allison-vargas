# Logica matematica 029 - modulos y divisibilidad (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 009, pero se subio la dificultad organizando el codigo en funciones (divisibilidad, mediana, validacion) y combinando dos condiciones: la proporcion de duraciones divisibles entre 3, y las que son divisibles entre 3 y 2 a la vez (numero_maldito, equivalente a divisibles entre 6). El umbral de numero_maldito se ajusto (<=0.75) para que el ejemplo diera competitivo, ya que con el umbral inicial de <=0.5 solo se cumplia una condicion. Se agregaron validaciones para valores negativos o no numericos, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `proporcion_div3` con `esDivisible(v, 3)`.
4. Calcular `numero_maldito` con `esDivisible(v, 3) && esDivisible(v, 2)` y su `proporcion_div_ambos`.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `proporcion_div3 >= 0.5` y `proporcion_div_ambos <= 0.75`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → proporcion_div3 0.75, proporcion_div_ambos 0.75, puntaje_final 27, clasificacion competitivo.
- Caso especial (valor 0, divisible entre todo): `[0,9,14]`, bono 0, penalizacion 0.
- Caso borde (valor negativo): `[12,-3,20]`, bono 5, penalizacion 2 → retorna error controlado.