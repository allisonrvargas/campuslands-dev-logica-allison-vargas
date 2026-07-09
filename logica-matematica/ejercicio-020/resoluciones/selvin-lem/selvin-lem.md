# Logica matematica 020 - simulaciones con formulas

## Como se planteo el problema
Se interpreto el array de participantes como precios de platillos de comida urbana. Se diseño una formula de simulacion sencilla: la demanda de cada platillo baja conforme sube el precio (`demanda = 100 - precio`), y con un ciclo y acumulador se calculo la ganancia simulada de cada platillo (`precio * demanda`), sumando el total. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que la ganancia promedio del ejemplo (1626.75) diera "competitivo".

## Reglas aplicadas
1. Simular `demanda = max(100 - precio, 0)` para cada platillo.
2. Calcular `ganancia = precio * demanda` y acumular `ganancia_simulada` con un ciclo.
3. Calcular `ganancia_promedio = ganancia_simulada / total`.
4. Ordenar el array original y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `ganancia_promedio >= 1600` → competitivo; si `>= 1000` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → ganancia_simulada 6507, ganancia_promedio 1626.75, puntaje_final 27, clasificacion competitivo.
- Caso borde (precios altos, demanda baja): `[90,95,99]`, bono 0, penalizacion 0 → ganancia_promedio 491.33, clasificacion principiante.
- Caso borde (array vacio): retorna error controlado.