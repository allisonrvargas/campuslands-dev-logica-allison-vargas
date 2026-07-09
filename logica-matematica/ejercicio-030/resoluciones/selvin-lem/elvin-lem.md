# Logica matematica 030 - redondeo y precision (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 010, pero se subio la dificultad organizando el codigo en funciones (error de redondeo, mediana, validacion) y calculando el error de redondeo por cada valor individual (no solo del promedio general), combinando dos condiciones: el error promedio del grupo y el peor caso individual (maximo error). Se agregaron validaciones para valores negativos o no numericos, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `errorRedondeo(valor) = |valor - round(valor)|` para cada elemento con `.map()`.
4. Calcular `error_redondeo_promedio` y `error_redondeo_maximo` sobre esos errores.
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `error_redondeo_promedio <= 0.25` y `error_redondeo_maximo <= 0.4`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo, todos enteros): `[12,18,25,30]`, bono 8, penalizacion 3 → error_redondeo_promedio 0, error_redondeo_maximo 0, puntaje_final 27, clasificacion competitivo.
- Caso especial (decimales cercanos a 0.5): `[10.5,20.4,15.5]`, bono 0, penalizacion 0 → error_redondeo_maximo 0.5, clasificacion principiante.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.