# Logica matematica 023 - promedios y medianas (analisis)

## Como se planteo el problema
Se partio de la base del ejercicio 003, pero se subio la dificultad combinando dos condiciones: si el puntaje_final alcanza el promedio del grupo, y si el grupo es estable (promedio y mediana muy parecidos). El sesgo (diferencia promedio-mediana) sirve para detectar partidas atipicas que distorsionan el promedio. Se agregaron validaciones de casos especiales: un solo elemento, valores no numericos, y bono/penalizacion invalidos.

## Reglas aplicadas
1. Validar que `participantes` sea un array no vacio de numeros finitos.
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `promedio` y `mediana`.
4. Calcular `sesgo = promedio - mediana` (0 si hay un solo elemento).
5. Calcular `estabilidad = 1 - (|sesgo|/promedio)` (1 si hay un solo elemento; 0 si promedio es 0).
6. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
7. Clasificar combinando: `puntaje_final >= promedio` y `estabilidad >= 0.9`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → sesgo -0.25, estabilidad 0.99, puntaje_final 27, clasificacion competitivo.
- Caso especial (partida atipica): `[5,6,7,100]`, bono 0, penalizacion 0 → sesgo y estabilidad reflejan la distorsion.
- Caso borde (un solo elemento): `[15]`, bono 5, penalizacion 2 → sesgo 0, estabilidad 1.
- Caso borde (array vacio): retorna error controlado.