# Logica matematica 032 - probabilidad basica (pingpong)

## Como se planteo el problema
Se partio del ejemplo dado en el enunciado (`participantes: [12,18,25,30], bono: 8, penalizacion: 3` -> `puntaje_final: 27, clasificacion: competitivo`) para deducir la regla oculta. Se combino la idea de probabilidad basica (que porcentaje del grupo supera el promedio) con el calculo del puntaje ajustado por mediana, bono y penalizacion, y se combinaron ambas condiciones para la clasificacion.

## Reglas aplicadas
1. Validar `participantes` con una funcion dedicada (numeros finitos, no negativos, arreglo no vacio).
2. Tratar `bono` o `penalizacion` negativos como 0.
3. Calcular `promedio` del grupo y `probabilidad_victoria` = (participantes >= promedio) / total.
4. Calcular `puntaje_final = round(mediana) + bono - penalizacion`, sin bajar de 0.
5. Clasificar combinando: `probabilidad_victoria >= 0.5` y `puntaje_final >= 25`. Ambas → competitivo; solo una → intermedio; ninguna → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → probabilidad_victoria 0.5, puntaje_final 27, clasificacion competitivo.
- Caso especial (solo una condicion se cumple): `[10,12,14,16,18]`, bono 0, penalizacion 0 → probabilidad_victoria 0.6, puntaje_final 14, clasificacion intermedio.
- Caso borde (valor negativo): `[12,-5,20]`, bono 5, penalizacion 2 → retorna error controlado.