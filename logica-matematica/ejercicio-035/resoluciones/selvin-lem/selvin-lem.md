# Logica matematica 035 - velocidad tiempo distancia (dibujo digital)

## Como se planteo el problema
Se partio del ejemplo dado en el enunciado (`participantes: [12,18,25,30], bono: 8, penalizacion: 3` -> `puntaje_final: 27, clasificacion: competitivo`) para deducir la regla oculta. Se interpreto cada valor de `participantes` como la velocidad (px/s) de un trazo al dibujar, asumiendo 1 segundo por trazo para calcular la distancia total, combinando la velocidad promedio (control del trazo) con el puntaje ajustado por mediana, bono y penalizacion.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos, arreglo no vacio).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `distancia_total` (suma de velocidades, tiempo=1s por trazo) y `velocidad_promedio` (promedio del grupo).
4. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
5. Clasificar combinando: `puntaje_final >= 25` y `velocidad_promedio <= 25`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.


## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → velocidad_promedio 21.25, distancia_total 85, puntaje_final 27, clasificacion competitivo.
- Caso especial (solo una condicion se cumple): `[40,45,50,60]`, bono 0, penalizacion 0 → velocidad_promedio 48.75, puntaje_final 48, clasificacion intermedio.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.