# Logica matematica 012 - probabilidad basica

## Como se planteo el problema
Se interpreto el array de participantes como puntos anotados por jugadores de pingpong. Con un ciclo y un acumulador se sumo el total de puntos y se identifico el maximo anotador en el mismo recorrido. La probabilidad de que un punto elegido al azar pertenezca al maximo anotador se calculo como `maximo / puntos_totales`. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que la probabilidad del ejemplo (0.35) diera "competitivo".

## Reglas aplicadas
1. Recorrer el array con un ciclo, acumulando `puntos_totales` y detectando el `maximo`.
2. Calcular `probabilidad_top = maximo / puntos_totales`.
3. Ordenar el array y calcular `mediana`.
4. `puntaje_final = round(mediana) + bono - penalizacion`.
5. Clasificar: si `probabilidad_top >= 0.35` → competitivo; si `>= 0.25` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → puntos_totales 85, probabilidad_top 0.35, puntaje_final 27, clasificacion competitivo.
- Caso borde (puntos parejos): `[20,20,20,20]`, bono 0, penalizacion 0 → probabilidad_top 0.25, clasificacion intermedio.
- Caso borde (array vacio): retorna error controlado.