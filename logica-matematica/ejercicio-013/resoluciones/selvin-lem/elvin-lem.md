# Logica matematica 013 - coordenadas y distancia

## Como se planteo el problema
Se interpreto el array de participantes como coordenadas (x,y) alternadas de puntos de aterrizaje en paracaidismo. Con un ciclo y acumulador se calculo la distancia euclidiana de cada par de coordenadas al objetivo ubicado en el origen (0,0), y se promediaron todas las distancias. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada del array completo + bono - penalizacion), y el umbral de clasificacion se definio para que la distancia promedio del ejemplo (30.34) diera "competitivo".

## Reglas aplicadas
1. Agrupar `participantes` en pares consecutivos `(x, y)`.
2. Calcular `distancia = sqrt(x^2 + y^2)` para cada par con un ciclo y acumulador.
3. Calcular `distancia_promedio` sobre todas las distancias.
4. Ordenar el array original y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `distancia_promedio <= 35` → competitivo; si `<= 50` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → distancias [21.63, 39.05], distancia_promedio 30.34, puntaje_final 27, clasificacion competitivo.
- Caso borde (aterrizaje lejano): `[80,90]`, bono 0, penalizacion 0 → distancia_promedio 120.42, clasificacion principiante.
- Caso borde (menos de 2 valores): retorna error controlado.