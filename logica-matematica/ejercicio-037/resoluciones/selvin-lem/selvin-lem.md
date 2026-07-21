# Logica matematica 037 - estadisticas de ranking (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 017, pero se subio la dificultad organizando el codigo en funciones (promedio, desviacion estandar, mediana, ranking, validacion) y combinando dos condiciones: el coeficiente de variacion (dispersion relativa al promedio, mas robusto que la desviacion absoluta) y el top_ratio (cuanto destaca el primer lugar sobre el promedio). Se contemplo el caso de empate en el primer lugar dentro del ranking generado, y se agregaron validaciones para promedio en cero, valores negativos o no numericos, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `promedio` y `desviacion_estandar` con funciones dedicadas.
4. Calcular `coeficiente_variacion = desviacion_estandar/promedio` (0 si promedio es 0).
5. Calcular `top_ratio = primer_lugar/promedio` (0 si promedio es 0).
6. Generar `ranking` ordenado de mayor a menor con `generarRanking()`.
7. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
8. Clasificar combinando: `coeficiente_variacion <= 0.35` y `top_ratio <= 1.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → coeficiente_variacion 0.32, top_ratio 1.41, puntaje_final 27, clasificacion competitivo.
- Caso especial (un proyecto domina): `[10,12,11,80]`, bono 0, penalizacion 0 → coeficiente_variacion y top_ratio altos, clasificacion principiante.
- Caso borde (empate en primer lugar): `[25,25,10]`, bono 5, penalizacion 2 → ranking refleja el empate.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.