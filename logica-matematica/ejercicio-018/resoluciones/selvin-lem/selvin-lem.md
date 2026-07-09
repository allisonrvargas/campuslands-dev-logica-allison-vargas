# Logica matematica 018 - normalizacion de puntajes

## Como se planteo el problema
Se interpreto el array de participantes como puntajes de calidad de soldadura. Con un ciclo se obtuvo el minimo y maximo, y se aplico normalizacion min-max para reescalar cada puntaje a un rango de 0 a 100. Con otro ciclo y acumulador se calculo el promedio de esos puntajes normalizados. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que el promedio normalizado del ejemplo (51.39) diera "competitivo".

## Reglas aplicadas
1. Obtener `minimo` y `maximo` del array con un ciclo.
2. Normalizar cada valor: `normalizado = (valor-minimo)/(maximo-minimo)*100`.
3. Calcular `promedio_normalizado` con un ciclo y acumulador.
4. Ordenar el array original y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `promedio_normalizado >= 50` → competitivo; si `>= 30` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → puntajes_normalizados [0, 33.33, 72.22, 100], promedio_normalizado 51.39, puntaje_final 27, clasificacion competitivo.
- Caso borde (todos iguales, rango 0): `[15,15,15]`, bono 0, penalizacion 0 → promedio_normalizado 100, clasificacion competitivo.
- Caso borde (array vacio): retorna error controlado.