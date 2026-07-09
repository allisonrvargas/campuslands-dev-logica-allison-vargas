## Analisis

- Entrada: `eloActual`, `eloOponente` (números enteros), `victoria` (booleano).
- Proceso: Aplicar el sistema de puntuación Elo, que utiliza una fórmula probabilística para ajustar el puntaje según la dificultad relativa del rival.
- Salida: El nuevo puntaje `elo` tras la partida.

## Reglas identificadas

1. Ajuste Dinámico: Ganar contra un oponente de mayor nivel otorga más puntos que ganar contra uno inferior.
2. Factor K: Define la volatilidad del ranking (32 es el estándar para jugadores en desarrollo).
3. Piso de Seguridad: El puntaje nunca puede caer por debajo de 0, independientemente de las derrotas.



## Pruebas

### Caso normal (Victoria contra rival superior)

Entrada:
eloActual: 1500, eloOponente: 1700, victoria: true

Resultado esperado:
~1521 (Se ganan más puntos por la diferencia de nivel)

### Caso borde (Derrota teniendo 0 puntos)

Entrada:
eloActual: 0, eloOponente: 2000, victoria: false

Resultado esperado:
0 (El sistema aplica el límite inferior)

## Explicacion final

Esta solución emplea la fórmula estándar de la FIDE para el sistema Elo, adaptada a entornos de videojuegos. La clave está en la variable `probabilidadVictoria`, que actúa como un control aritmético: si el jugador tenía pocas probabilidades de ganar y lo logra, el sistema lo premia significativamente; si pierde contra un rival mucho más débil, el sistema le resta más puntos por no cumplir con la expectativa.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.