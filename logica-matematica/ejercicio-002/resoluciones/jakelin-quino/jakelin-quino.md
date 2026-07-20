## Analisis

- Entrada: Cantidad de partidos jugados y partidos ganados.
- Proceso: Calcular el porcentaje de victorias dividiendo los ganados entre los jugados y multiplicando por 100. Luego, asignar una categoría según el resultado.
- Salida: El porcentaje calculado y el nivel del equipo.

## Reglas identificadas

1. Si el porcentaje es 70% o más, es "equipo elite".
2. Si el porcentaje es entre 50% y 69%, es "equipo estable".
3. Si el porcentaje es menor al 50%, es "equipo en desarrollo".

## Pruebas

### Caso normal

Entrada:
partidosJugados: 20
partidosGanados: 12

Resultado esperado:
porcentaje: 60%
nivel: equipo estable

### Caso borde

Entrada:
partidosJugados: 10
partidosGanados: 10

Resultado esperado:
porcentaje: 100%
nivel: equipo elite

## Explicacion final

Para resolver este problema, primero definí la fórmula matemática para obtener el porcentaje. Después, utilicé una estructura 'if-else if-else' para comparar este valor y asignar la categoría correspondiente. Esto permite clasificar cualquier equipo basándose únicamente en su proporción de victorias sobre el total de juegos.
