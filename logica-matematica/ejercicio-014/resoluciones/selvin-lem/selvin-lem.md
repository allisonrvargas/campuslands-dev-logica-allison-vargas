# Logica matematica 014 - areas y perimetros

## Como se planteo el problema
Se interpreto el array de participantes como medidas (base, altura) alternadas de zonas rectangulares de tatuaje. Con un ciclo y acumuladores se sumaron el area total y el perimetro total de todas las zonas. Se definio la eficiencia_espacio como area_total/perimetro_total, midiendo que tanto espacio se aprovecha por unidad de contorno. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que la eficiencia del ejemplo (5.68) diera "competitivo".

## Reglas aplicadas
1. Agrupar `participantes` en pares consecutivos `(base, altura)`.
2. Acumular `area_total = suma(base*altura)` y `perimetro_total = suma(2*(base+altura))` con un ciclo.
3. Calcular `eficiencia_espacio = area_total / perimetro_total`.
4. Ordenar el array original y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `eficiencia_espacio >= 5` → competitivo; si `>= 3` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → area_total 966, perimetro_total 170, eficiencia_espacio 5.68, puntaje_final 27, clasificacion competitivo.
- Caso borde (zona alargada, baja eficiencia): `[2,40]`, bono 0, penalizacion 0 → eficiencia_espacio 0.95, clasificacion principiante.
- Caso borde (menos de 2 valores): retorna error controlado.