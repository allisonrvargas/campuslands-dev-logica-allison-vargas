# Logica matematica 033 - coordenadas y distancia (paracaidismo)

## Como se planteo el problema
Se partio del ejemplo dado en el enunciado (`participantes: [12,18,25,30], bono: 8, penalizacion: 3` -> `puntaje_final: 27, clasificacion: competitivo`) para deducir la regla oculta. Se interpreto cada valor de `participantes` como la distancia (en metros) entre el punto de aterrizaje de un paracaidista y el objetivo, combinando la precision promedio del grupo con el peor salto individual, junto al puntaje ajustado por mediana, bono y penalizacion.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos, arreglo no vacio).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `distancia_promedio` (promedio del grupo) y `distancia_maxima` (peor salto, con `Math.max`).
4. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
5. Clasificar combinando: `puntaje_final >= 25` y `distancia_maxima <= 35`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.


## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → distancia_promedio 21.25, distancia_maxima 30, puntaje_final 27, clasificacion competitivo.
- Caso especial (solo una condicion se cumple): `[5,6,7,8]`, bono 0, penalizacion 0 → distancia_maxima 8, puntaje_final 7, clasificacion intermedio.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.