# Logica matematica 024 - rangos y maximos (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 004, pero se subio la dificultad combinando dos condiciones: donde cae el puntaje_final dentro del rango de precios del inventario (cobertura_rango), y que tan concentrados estan los precios en los extremos del rango (concentracion_extremos). Se agregaron validaciones de casos especiales: rango 0 (todos los precios iguales), valores negativos o no numericos, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio de numeros finitos y no negativos.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `maximo`, `minimo` y `rango`.
4. Calcular `concentracion_extremos = (cantidad_en_minimo + cantidad_en_maximo) / total`.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Calcular `cobertura_rango = (puntaje_final - minimo) / rango` (1 si rango es 0).
7. Clasificar combinando: `cobertura_rango >= 0.5` y `concentracion_extremos <= 0.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → cobertura_rango 0.83, concentracion_extremos 0.5, puntaje_final 27, clasificacion competitivo.
- Caso especial (inventario polarizado): `[10,10,10,50,50]`, bono 0, penalizacion 0 → concentracion_extremos alta.
- Caso borde (rango 0): `[20,20,20]`, bono 0, penalizacion 0 → cobertura_rango 1.
- Caso borde (array vacio): retorna error controlado.