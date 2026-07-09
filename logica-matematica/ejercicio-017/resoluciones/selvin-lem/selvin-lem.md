# Logica matematica 017 - estadisticas de ranking

## Como se planteo el problema
Se interpreto el array de participantes como puntajes de proyectos de arquitectura 3D. Se genero un ranking ordenando de mayor a menor con posiciones, y se calculo la desviacion estandar con dos ciclos (uno para el promedio, otro para la suma de diferencias al cuadrado) para medir que tan disperso es el grupo. El puntaje_final se mantuvo con la formula ya validada (mediana redondeada + bono - penalizacion), y el umbral de clasificacion se definio para que la desviacion del ejemplo (6.83) diera "competitivo".

## Reglas aplicadas
1. Calcular `promedio` con un ciclo.
2. Calcular `desviacion_estandar = sqrt(suma((valor-promedio)^2)/n)` con un ciclo y acumulador.
3. Generar `ranking`: valores ordenados de mayor a menor con su posicion.
4. Ordenar el array y calcular `mediana`.
5. `puntaje_final = round(mediana) + bono - penalizacion`.
6. Clasificar: si `desviacion_estandar <= 7` → competitivo; si `<= 10` → intermedio; si no → principiante.

## Casos probados
- Caso normal (ejemplo): `[12,18,25,30]`, bono 8, penalizacion 3 → desviacion_estandar 6.83, puntaje_final 27, clasificacion competitivo.
- Caso borde (dispersion alta): `[5,60,8]`, bono 0, penalizacion 0 → desviacion_estandar alta, clasificacion principiante.
- Caso borde (array vacio): retorna error controlado.