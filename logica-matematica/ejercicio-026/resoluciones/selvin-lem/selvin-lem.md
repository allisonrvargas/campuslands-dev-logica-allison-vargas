# Logica matematica 026 - conversion de unidades (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 006, pero se subio la dificultad organizando el codigo en funciones puras (conversion, validacion, mediana) y combinando dos condiciones: la velocidad promedio en mph y la proporcion de autos que superan un limite de referencia de 15 mph. Se agregaron validaciones de casos especiales: valores negativos o no numericos, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Convertir cada valor de km/h a mph con `kmhAMph()` usando `.map()`.
4. Calcular `promedio_mph` y `superan_limite` (proporcion sobre `LIMITE_MPH = 15`).
5. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0, usando `calcularMediana()`.
6. Clasificar combinando: `promedio_mph >= 13` y `superan_limite >= 0.4`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → promedio_mph 13.2, superan_limite 0.5, puntaje_final 27, clasificacion competitivo.
- Caso especial (velocidades bajas): `[5,6,7]`, bono 0, penalizacion 0 → superan_limite 0, clasificacion principiante.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.