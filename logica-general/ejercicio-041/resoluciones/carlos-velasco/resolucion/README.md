# Plantilla de solución

## Analisis

* **Entrada**: Objeto `jugador` con propiedades `nombre`, `partidasJugadas`, `victorias` y `reportes`.
* **Proceso**: Evaluación de seguridad y rendimiento para categorizar el estado de la cuenta.
* **Salida**: Objeto con `estado` y `motivo` explicativo.

## Reglas identificadas

1. Más de 5 reportes resultan en estado "Baneado".
2. Menos de 20 partidas con Win rate $\ge$ 80% activan "En revisión (Smurf)".
3. El rango se determina mediante el Win rate: $\ge 60\%$ (Alto), $\ge 40\%$ (Medio), $< 40\%$ (Bajo).

## Pruebas

### Caso normal

* **Entrada**: `{ nombre: "NoobMaster69", partidasJugadas: 100, victorias: 45, reportes: 2 }`
* **Resultado esperado**: `{ estado: "Rango Medio", motivo: "Clasificación basada en un win rate del 45.0%." }`

### Caso borde

* **Entrada**: `{ nombre: "TrollGamer", partidasJugadas: 50, victorias: 20, reportes: 10 }`
* **Resultado esperado**: `{ estado: "Baneado", motivo: "Exceso de reportes acumulados." }`

## Explicacion final

La solución emplea una estructura de control condicional que prioriza la integridad de la comunidad sobre la clasificación de habilidad, asegurando que solo los jugadores aptos obtengan un rango estándar.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Baneo**: `jugador.reportes > 5`
* **Smurf**: `partidasJugadas < 20 && winRate >= 80`