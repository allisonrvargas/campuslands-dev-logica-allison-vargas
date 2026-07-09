## Analisis

- Entrada: Cantidad total de saques realizados y cantidad de saques exitosos.
- Proceso: Calcular la probabilidad dividiendo los éxitos entre el total y multiplicando por 100 para obtener el porcentaje.
- Salida: El porcentaje de probabilidad de éxito y la clasificación del jugador.

## Reglas identificadas

1. La probabilidad se define como el cociente entre casos favorables y casos totales.
2. Si la probabilidad es 70% o más, el jugador es clasificado como "experto".
3. Si la probabilidad es menor al 70%, el jugador es clasificado como "en aprendizaje".

## Pruebas

### Caso normal

Entrada:
saquesRealizados: 50
saquesExitosos: 35

Resultado esperado:
probabilidad: 70%
nivel: experto

### Caso borde

Entrada:
saquesRealizados: 100
saquesExitosos: 0

Resultado esperado:
probabilidad: 0%
nivel: en aprendizaje

## Explicacion final

Para resolver este ejercicio, apliqué la regla básica de la probabilidad: casos favorables entre casos totales. Luego, usé una estructura condicional 'if-else' para evaluar si el resultado porcentual cumple con el umbral definido para ser considerado un jugador experto.