# Logica matematica 034 - areas y perimetros (tatuajes)

## Como se planteo el problema
Se partio del ejemplo dado en el enunciado (`participantes: [12,18,25,30], bono: 8, penalizacion: 3` -> `puntaje_final: 27, clasificacion: competitivo`) para deducir la regla oculta. Se interpreto cada valor de `participantes` como el lado (en cm) de un diseno de tatuaje cuadrado, combinando el area total del conjunto de disenos con el mayor perimetro individual, junto al puntaje ajustado por mediana, bono y penalizacion.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos, arreglo no vacio).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `area_total` (suma de lado² de cada elemento) y `perimetro_maximo` (mayor lado*4).
4. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
5. Clasificar combinando: `puntaje_final >= 25` y `area_total >= 1900`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Como ejecutar
Guardar el codigo en `nombre-apellido.js` y correr con Node:
node nombre-apellido.js

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → area_total 1993, perimetro_maximo 120, puntaje_final 27, clasificacion competitivo.
- Caso especial (solo una condicion se cumple): `[1,1,1,60]`, bono 0, penalizacion 0 → area_total 3603, puntaje_final 1, clasificacion intermedio.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.