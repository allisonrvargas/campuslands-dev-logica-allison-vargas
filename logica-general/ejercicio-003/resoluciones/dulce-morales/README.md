# Plantilla de solucion

## Analisis

- Entrada: Un objeto `jugadorInscripcion` con las propiedades `nickname` (texto), `rangoPuntos` (número), `edad` (número) y `tienePenalizaciones` (booleano).
- Proceso: Evaluar los datos del pro-player para verificar si cumple simultáneamente con los criterios de edad legal competitiva, nivel de habilidad mínimo y excelente conducta en el servidor.
- Salida: Un objeto que indica el estado de la inscripción del competidor, la categoría del bracket asignado y el motivo técnico de la resolución.

## Reglas identificadas

1. Regla de Admisión Competitiva: Si el jugador tiene al menos 16 años, posee un rango mayor o igual a 2500 puntos de elo y su propiedad `tienePenalizaciones` es falsa (`false`), su inscripción se aprueba de inmediato en el bracket `"profesional"`.
2. Regla de Fair Play Estricta: Si el jugador cuenta con reportes o penalizaciones activas (`true`), su ingreso queda automáticamente denegado para salvaguardar la integridad competitiva del torneo.

## Pruebas

### Caso normal

Entrada:
jugadorInscripcion: {
  nickname: "XenonGamer",
  rangoPuntos: 2800,
  edad: 19,
  tienePenalizaciones: false
}

Resultado esperado:
estadoInscripcion: "aprobado"
bracketAsignado: "profesional"
motivo: "El jugador XenonGamer cumple con la edad mínima, supera el elo requerido y mantiene un historial limpio de penalizaciones."

### Caso borde

Entrada:
jugadorInscripcion: {
  nickname: "ToxicPlayer",
  rangoPuntos: 3100,
  edad: 22,
  tienePenalizaciones: true
}

Resultado esperado:
estadoInscripcion: "rechazado"
bracketAsignado: "ninguno"
motivo: "Inscripción cancelada. El jugador cuenta con sanciones de comportamiento activas en el sistema."

## Explicacion final

La solución funciona porque procesa de forma secuencial las directivas de elegibilidad del torneo mediante compuertas lógicas bien definidas. El algoritmo evalúa el historial de comportamiento ético (Fair Play) como un filtro crítico excluyente; una vez superado, analiza los valores numéricos del rango competitivo (elo) y la edad biológica del participante para asignarle la categoría de juego correspondiente o vetar su acceso de manera segura.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.