# Logica matematica 015 - velocidad tiempo distancia

## Como se planteo el problema
Se interpreto el array de participantes como pares (distancia, tiempo) de trazos hechos en dibujo digital. Con un ciclo y acumulador se calculo la velocidad de cada trazo (distancia/tiempo) y se promediaron todas. Se agrego validacion para pares con tiempo en cero, evitando division invalida. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que la velocidad promedio del ejemplo (0.75) diera "competitivo".

## Reglas aplicadas
1. Agrupar `participantes` en pares consecutivos `(distancia, tiempo)`.
2. Calcular `velocidad = distancia/tiempo` para cada par valido (tiempo distinto de 0) con un ciclo y acumulador.
3. Calcular `velocidad_promedio` sobre todas las velocidades validas.
4. Ordenar el array original y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `velocidad_promedio >= 0.7` → competitivo; si `>= 0.5` → intermedio; si no → principiante.

# Logica matematica 015 - velocidad tiempo distancia

## Como se planteo el problema
Se interpreto el array de participantes como pares (distancia, tiempo) de trazos hechos en dibujo digital. Con un ciclo y acumulador se calculo la velocidad de cada trazo (distancia/tiempo) y se promediaron todas. Se agrego validacion para pares con tiempo en cero, evitando division invalida. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que la velocidad promedio del ejemplo (0.75) diera "competitivo".

## Reglas aplicadas
1. Agrupar `participantes` en pares consecutivos `(distancia, tiempo)`.
2. Calcular `velocidad = distancia/tiempo` para cada par valido (tiempo distinto de 0) con un ciclo y acumulador.
3. Calcular `velocidad_promedio` sobre todas las velocidades validas.
4. Ordenar el array original y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `velocidad_promedio >= 0.7` → competitivo; si `>= 0.5` → intermedio; si no → principiante.

## Como ejecutar
Guardar el codigo en `nombre-apellido.js` y correr con Node: