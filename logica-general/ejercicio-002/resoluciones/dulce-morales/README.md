# Plantilla de solucion

## Analisis

- Entrada: Un objeto `equipoEstadisticas` con las propiedades `nombre` (texto), `partidosJugados` (número), `partidosGanados` (número) y `puntosActuales` (número).
- Proceso: Comprobar la consistencia de los datos deportivos verificando que las victorias no superen los encuentros jugados y que la puntuación acumulada mantenga coherencia con el reglamento del torneo.
- Salida: Un objeto que indica el estado de validación de los datos del equipo, la confirmación de su posición en el ranking y el motivo del resultado técnico.

## Reglas identificadas

1. Regla de Coherencia de Partidos: El número de `partidosGanados` nunca puede ser mayor que el total de `partidosJugados`. De lo contrario, los datos del ranking se consideran corruptos o manipulados.
2. Regla de Puntuación Máxima: En fútbol sala se otorgan 3 puntos por victoria y 1 por empate. Por lo tanto, los `puntosActuales` no pueden exceder el límite matemático de multiplicar los partidos jugados por 3.

## Pruebas

### Caso normal

Entrada:
equipoEstadisticas: {
  nombre: "Futsal Campuslands",
  partidosJugados: 5,
  partidosGanados: 3,
  puntosActuales: 10
}

Resultado esperado:
datosValidos: true
estadoRanking: "datos_verificados"
motivo: "Las estadísticas del equipo Futsal Campuslands son matemáticamente consistentes y aptas para actualizar la tabla general."

### Caso borde

Entrada:
equipoEstadisticas: {
  nombre: "Sporting Ruidoso",
  partidosJugados: 4,
  partidosGanados: 5,
  puntosActuales: 15
}

Resultado esperado:
datosValidos: false
estadoRanking: "error_inconsistencia"
motivo: "Error de validación: El número de partidos ganados excede los partidos jugados, o la puntuación supera el límite teórico máximo."

## Explicacion final

La solución funciona porque implementa un bloque de filtros restrictivos que valida las leyes fundamentales del deporte antes de procesar el ranking general. El algoritmo descarta valores de entrada negativos, comprueba la relación lógica entre partidos totales y victorias, y evalúa los puntos mediante una cota máxima matemática ($Partidos \times 3$), evitando que registros erróneos o incoherentes alteren los puestos clasificatorios del torneo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.