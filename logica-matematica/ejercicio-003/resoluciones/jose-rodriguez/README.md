# Plantilla de solucion

## Analisis

- Entradas:
- `puntajes` (lista de float/int): Serie de clasificaciones o puntuaciones obtenidas por el equipo de esports a lo largo de sus partidas en el torneo.

- Proceso:
1. Sumar todos los valores de la lista `puntajes` y dividirlos entre la cantidad total de elementos para obtener el **promedio**. 
2. Ordenar la lista de puntajes de menor a mayor de forma estrictamente secuencial.
3. Identificar la **mediana**: Si la cantidad de partidas es impar, extraer el valor del indice central: si es par, localizar los dos valores centrales y calcular su promedio numerico.
4. Comparar simultaneamente mediante un condicional con conjuncion logica (`and`) si el promedio calculado es mayor o igual a 75 **Y** la mediana calculada es mayor o igual a 75.

- Salida:
    - `promedio` (Float redondeado a 1 decimal).
    - `mediana` (float redondeado a 1 decimal).
    - `clasifica_leyendas` (booleano: `True` o `False`).

## Reglas identificadas

1. **Dependencia del orden estadistico:** El calculo de la mediana requiere obligatoriamente una fase previa de ordenamiento algoritmico (`sorted()`). Operar sobre datos desordenados produce un resultado logico invalido.
2. **Bifurcacion por Paridad:** El flujo del proceso matematico de la mediana debe ramificarse segun la cantidad de registros (`n % 2 != 0`). El algoritmo contempla una formula directa para muestras impares y una compuesta para muestras pares.
3. **Consistencia en el alto rendimiento:** Para mitigar el impacto de "partidas atipicas" (una sola partida con puntaje extemadamente alto o bajo), la regla de negocio exige consistencia. Solo se otroga la clasificacion si el centro de la distribucion (mediana) y la fuerza general (promedio) logran pasar el corte critico de los 75 puntos.

## Pruebas

### Caso normal 

Entrada:
- `puntajes`: [80, 70, 90, 75, 85] *(Muestra impar)*

Resultado esperado:
- `Promedio`: 80.0 *(Cálculo: (80 + 70 + 90 + 75 + 85) / 5 = 400 / 5 = 80)*
- `Mediana`: 80.0 *(Lista ordenada: [70, 75, 80, 85, 90]. El elemento central es 80)*
- `¿Clasifica Leyendas?`: `True` *(Cálculo: 80.0 >= 75 es Verdadero Y 80.0 >= 75 es Verdadero)*

### Caso borde

Entrada:
- `puntajes`: [100, 100, 40, 50] *(Muestra par con alta dispersión)*

Resultado esperado:
- `Promedio`: 72.5 *(Cálculo: (100 + 100 + 40 + 50) / 4 = 290 / 4 = 72.5)*
- `Mediana`: 75.0 *(Lista ordenada: [40, 50, 100, 100]. Elementos del centro: 50 y 100. Operación: (50 + 100) / 2 = 75)*
- `¿Clasifica Leyendas?`: `False` *(Cálculo: Aunque la mitad de sus partidas fueron perfectas empujando la mediana a 75.0, el promedio final de 72.5 no superó el mínimo. Verdadero Y Falso resulta en Falso)*

## Explicacion final 

Esta solucion funciona debido a que neutraliza las debilidades individuales de las metricas estadisticas mediante su uso combinado. El promedio es altamente sensible a valores extremos aislados, miuentras que la mediana ignora las magnitudes enfocandose solo en la posicion. al requerir que ambos indicadores estadisticos superen el umbral competitivo de forma simultanea, el sistema asegura evaluar con justucia la verdaderra regularidad del equipo de esports.