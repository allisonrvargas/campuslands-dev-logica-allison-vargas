# Logica matematica 011 - conteo combinatorio simple

## Como se planteo el problema
Se interpreto el array de participantes como niveles de peleadores de kickboxing. Con un ciclo anidado se generaron todas las combinaciones posibles de enfrentamientos (combinatoria simple de 2 elementos) usando un acumulador. Se conto cuantos de esos combates son "parejos" segun una diferencia de nivel maxima, y se calculo la proporcion sobre el total. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que la proporcion del ejemplo (0.33) diera "competitivo".

## Reglas aplicadas
1. Generar todas las combinaciones de 2 participantes con ciclo anidado: `combates_totales = n*(n-1)/2`.
2. Contar `combates_parejos`: pares con diferencia de nivel `<= 6`.
3. Calcular `proporcion_parejos = combates_parejos / combates_totales`.
4. Ordenar el array original y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `proporcion_parejos >= 0.3` → competitivo; si `>= 0.15` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → combates_totales 6, combates_parejos 2, proporcion_parejos 0.33, puntaje_final 27, clasificacion competitivo.
- Caso borde (niveles muy parejos): `[50,51,52]`, bono 0, penalizacion 0 → proporcion_parejos 1, clasificacion competitivo.
- Caso borde (menos de 2 participantes): retorna error controlado.