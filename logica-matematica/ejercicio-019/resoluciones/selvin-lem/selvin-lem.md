# Logica matematica 019 - validaciones numericas

## Como se planteo el problema
Se interpreto el array de participantes como proporciones de reactivos en una formula quimica. Con un ciclo se valido cada valor: debe ser numero finito, positivo, y estar dentro del rango aceptable [1, 100]. Se contaron validos e invalidos con acumuladores y se calculo la proporcion de validos. El puntaje_final se calcula solo sobre los valores validos usando la formula ya conocida (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se baso en la proporcion de validos, para que el ejemplo (100% validos) diera "competitivo".

## Reglas aplicadas
1. Recorrer `participantes` con un ciclo, validando: numero finito, positivo, en rango [1, 100].
2. Contar `validos` e `invalidos` con acumuladores.
3. Calcular `proporcion_validos = validos / total`.
4. Calcular `mediana` sobre los valores validos.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `proporcion_validos >= 1` → competitivo; si `>= 0.75` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → validos 4, invalidos 0, proporcion_validos 1, puntaje_final 27, clasificacion competitivo.
- Caso borde (datos invalidos): `[-5,150,NaN,20]`, bono 0, penalizacion 0 → validos 1, invalidos 3, clasificacion principiante.
- Caso borde (array vacio): retorna error controlado.