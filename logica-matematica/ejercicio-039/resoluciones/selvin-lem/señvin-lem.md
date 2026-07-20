# Logica matematica 039 - validaciones numericas (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 019, pero se subio la dificultad organizando el codigo en funciones (validacion de reactivo, mediana, validacion base) y combinando dos condiciones: la proporcion de reactivos validos, y de los invalidos, que proporcion falla por exceso (mayor a 100) en vez de por defecto. Se agrego el caso especial de que todos los reactivos sean invalidos (retorna puntaje 0 y clasificacion principiante directamente), y se cuidó que NaN y valores no numericos se traten como invalidos sin romper la ejecucion.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Clasificar cada valor como valido o invalido con `esReactivoValido()`.
4. Calcular `proporcion_validos = validos/total`.
5. Calcular `concentracion_invalidos_extremos = invalidos_por_exceso/total_invalidos` (0 si no hay invalidos).
6. Si no hay validos: retornar puntaje 0 y clasificacion principiante.
7. Calcular `puntaje_final = round(mediana(validos)) + bono - penalizacion`, sin bajar de 0.
8. Clasificar combinando: `proporcion_validos >= 0.75` y `concentracion_invalidos_extremos <= 0.5`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → proporcion_validos 1, concentracion_invalidos_extremos 0, puntaje_final 27, clasificacion competitivo.
- Caso especial (invalidos por exceso): `[12,150,200,-5]`, bono 0, penalizacion 0 → concentracion_invalidos_extremos 0.67.
- Caso borde (todos invalidos): `[-1,0,500]`, bono 5, penalizacion 2 → puntaje_final 0, clasificacion principiante.