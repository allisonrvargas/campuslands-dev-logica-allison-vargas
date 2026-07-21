# Logica matematica 036 - presupuestos y descuentos (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 016, pero se subio la dificultad organizando el codigo en funciones (presupuesto, descuento, mediana, validacion) y combinando dos condiciones: el descuento por volumen obtenido, y la concentracion del gasto en la escena mas cara (riesgo de dependencia de un solo item). Se agrego el caso especial de presupuesto en cero (todos los valores en 0), y validaciones para valores negativos o no numericos y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `presupuesto_total` con `calcularPresupuesto()` y `descuento_porcentaje` con `calcularDescuento()` (escalonado: >=80 → 15%, >=50 → 10%, si no → 5%).
4. Calcular `concentracion_gasto = maximo/presupuesto_total` (0 si presupuesto_total es 0).
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
6. Clasificar combinando: `descuento_porcentaje >= 15%` y `concentracion_gasto <= 0.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → presupuesto_total 85, descuento_porcentaje 15, concentracion_gasto 0.35, puntaje_final 27, clasificacion competitivo.
- Caso especial (gasto concentrado): `[5,5,90]`, bono 0, penalizacion 0 → concentracion_gasto 0.9, clasificacion intermedio.
- Caso borde (presupuesto en cero): `[0,0,0]`, bono 5, penalizacion 2 → concentracion_gasto 0.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.