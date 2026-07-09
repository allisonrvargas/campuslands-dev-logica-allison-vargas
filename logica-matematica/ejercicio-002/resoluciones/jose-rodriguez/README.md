# Plantilla de solucion

## Analisis

- Entrada:
    - `partidos_ganados` (int): Numero de pertidos ganados por el equipo.
    - `partidos_empatados` (int): Numero de partidos empatados por el equipo 
    - `partidos_perdidos` (int): Numero de partidos perdidos por el equipo.
    - `goles_favor` (int): Total de goles anotados por el equipo.
    - `goles_contra` (int): Total de goles recibidos por el equipo.

- Proceso:
1. Calcular los puntos totales acumulados otorgando 3 puntos por victoria, 1 por empate y 0 por derrota.
2. Calcular el total de partidos jugados sumando las victoriad, empates y derrotas.
3. Calcular el rendimiento porcentual del equipo basandose en los puntos obtenidos frente a los puntos maximos posibles (partidos jugados * 3). Si no se han jugado partidos, el renmiento es 0%.
4. Calcular la diferencia de goles restando los goles en contra a los goles a favor.
5. Evaluar la clasificacion al "Top 4 del Torneo" usando una condicion logica: el equipo clasifica si su rendimiento es mayhor o igual al 65% **Y** su diferencia de goles es positiva (mayor a 0).

- Salida:
- `puntos-totales` (int).
- `rendimiento_porcentual` (Float redondeado a 1 decimal).
- `diferencia_goles` (int).
- `clasificacion_top4` (booleano: `True` o `False`).

## Reglas identificadas

1. **Ponderacion del sistema de puntos:** Cada partido ganado otorga estrictamente 3 puntos, el empate otorga 1 punto y la derrota no suma puntos (0).
2. **Calculo de proporciones y rendimiento:** El rendimiento se define como `(puntos obtenidos / Puntos maximos posibles) * 100`. Para evitar un error de division por cero (`ZeeroDivisionError`), si el total de partidfos jugados es 0, el rendimiento se establece directamente en 0.0%.
3. **Criterio estricto de clasificacion (conjuncion logica):** La regla de negocio dicta que para entrar al ranking del "top 4 del Torneo", se deben cumplir ambas condiciones simultaneamente utilizando el operador logico `and`: rendimiento minimo de 65% **AND** diferencia de goles estrictamente mayor a cero.

## Pruebas 

### Caso normal 

Entrada:
- `partidos_ganados`: 7
- `partidos_empatados`: 2
- `partidos_perdidos`: 1
- `goles_favor`: 25
- `goles_contra`: 12

Resultado esperado:
- `Puntos Totales`: 23 *(Cálculo: (7 * 3) + (2 * 1) = 21 + 2 = 23)*
- `Rendimiento`: 76.7% *(Cálculo: (23 / 30) * 100)*
- `Diferencia de Goles`: 13 *(Cálculo: 25 - 12)*
- `¿Clasifica Top 4?`: `True` *(Cálculo: 76.7 >= 65 es Verdadero Y 13 > 0 es Verdadero)*

### Caso borde

Entrada:
- `partidos_ganados`: 2
- `partidos_empatados`: 0
- `partidos_perdidos`: 1
- `goles_favor`: 5
- `goles_contra`: 6

Resultado esperado:
- `Puntos Totales`: 6 *(Cálculo: 2 * 3 = 6)*
- `Rendimiento`: 66.7% *(Cálculo: (6 / 9) * 100)*
- `Diferencia de Goles`: -1 *(Cálculo: 5 - 6)*
- `¿Clasifica Top 4?`: `False` *(Cálculo: El rendimiento es superior al 65%, pero la diferencia de goles es negativa. Verdadero Y Falso resulta en Falso)*

## Explicacion final 

Esta solucion funciona porque traduce variables del mundo real en proporciones matematicass exactas y previene fallos operativos como la division por cero cuando un torneo no ha iniciado. Al unificar el criterio deportivo (puntos obtenidos) con el criterio de desempate (goles), asegura un veredicto logico irrefutable basado en algebra booleana, ideal para sistemas de ranking automatizados.