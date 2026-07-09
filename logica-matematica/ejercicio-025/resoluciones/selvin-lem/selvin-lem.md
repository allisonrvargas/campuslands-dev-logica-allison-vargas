# Logica matematica 025 - minimos y limites (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 005, pero se subio la dificultad combinando dos condiciones: el margen de seguridad del repuesto minimo tras la penalizacion, y el riesgo de desabasto (proporcion de repuestos por debajo del promedio del taller). A diferencia del puntaje_final, el margen_seguridad se deja reportar en negativo a proposito, porque representa una alerta real de inventario insuficiente. Se agregaron validaciones de casos especiales: valores negativos o no numericos, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio de numeros finitos y no negativos.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `minimo` y `margen_seguridad = minimo - penalizacion` (puede ser negativo).
4. Calcular `riesgo_desabasto = cantidad_bajo_promedio / total`.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `margen_seguridad >= bono` y `riesgo_desabasto <= 0.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

# Logica matematica 025 - minimos y limites (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 005, pero se subio la dificultad combinando dos condiciones: el margen de seguridad del repuesto minimo tras la penalizacion, y el riesgo de desabasto (proporcion de repuestos por debajo del promedio del taller). A diferencia del puntaje_final, el margen_seguridad se deja reportar en negativo a proposito, porque representa una alerta real de inventario insuficiente. Se agregaron validaciones de casos especiales: valores negativos o no numericos, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio de numeros finitos y no negativos.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `minimo` y `margen_seguridad = minimo - penalizacion` (puede ser negativo).
4. Calcular `riesgo_desabasto = cantidad_bajo_promedio / total`.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `margen_seguridad >= bono` y `riesgo_desabasto <= 0.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Como ejecutar
Guardar el codigo en `nombre-apellido.js` y correr con Node: