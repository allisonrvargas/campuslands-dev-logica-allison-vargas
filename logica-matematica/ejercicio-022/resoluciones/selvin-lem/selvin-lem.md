# Logica matematica 022 - porcentajes y proporciones (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 002, pero se subio la dificultad combinando dos condiciones porcentuales para la clasificacion: que tan lider es el puntaje_final frente al maximo del ranking, y que proporcion de equipos estan empatados en ese maximo. Se agregaron validaciones de casos especiales: valores negativos, division entre cero cuando el maximo es 0, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio de numeros finitos y no negativos.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `maximo` y `cantidad_lideres` (equipos empatados en el maximo).
4. Calcular `porcentaje_participacion_top = cantidad_lideres/total*100`.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Calcular `porcentaje_liderazgo = puntaje_final/maximo*100` (0 si maximo es 0).
7. Clasificar combinando: `porcentaje_liderazgo >= 80` y `porcentaje_participacion_top <= 50`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

# Logica matematica 022 - porcentajes y proporciones (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 002, pero se subio la dificultad combinando dos condiciones porcentuales para la clasificacion: que tan lider es el puntaje_final frente al maximo del ranking, y que proporcion de equipos estan empatados en ese maximo. Se agregaron validaciones de casos especiales: valores negativos, division entre cero cuando el maximo es 0, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio de numeros finitos y no negativos.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `maximo` y `cantidad_lideres` (equipos empatados en el maximo).
4. Calcular `porcentaje_participacion_top = cantidad_lideres/total*100`.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Calcular `porcentaje_liderazgo = puntaje_final/maximo*100` (0 si maximo es 0).
7. Clasificar combinando: `porcentaje_liderazgo >= 80` y `porcentaje_participacion_top <= 50`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → porcentaje_liderazgo 90, porcentaje_participacion_top 25, puntaje_final 27, clasificacion competitivo.
- Caso especial (empate en el maximo): `[30,30,30,10]`, bono 0, penalizacion 0 → porcentaje_participacion_top 75, no cumple esa condicion.
- Caso especial (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.
- Caso borde (array vacio): retorna error controlado.