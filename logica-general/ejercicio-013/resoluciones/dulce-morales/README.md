# Plantilla de solucion

## Analisis

- Entrada: Un arreglo `listaSaltos` con objetos que representan cada salto planificado (propiedades `paracaidista`, `velocidadVientoNudos`, `alturaSaltoPies` y `verificacionEquipo`).
- Proceso: Iterar por cada uno de los casos mediante un ciclo para analizar si cumplen con los estándares estrictos de seguridad aérea de la escuela de paracaidismo.
- Salida: Un objeto con el recuento total de saltos aprobados, cancelados y un reporte detallado con las acciones preventivas aplicadas.

## Reglas identificadas

1. Regla de Clima y Altura Extrema: Si la `velocidadVientoNudos` es mayor a `25` nudos o la `alturaSaltoPies` se encuentra por debajo de `3000` pies (altura mínima de seguridad), el salto se cancela inmediatamente por alto riesgo.
2. Regla de Integridad del Equipo: Si el estado de la propiedad `verificacionEquipo` es falso (`false`), el salto se deniega de inmediato, priorizando la vida del atleta ante un posible fallo de apertura del paracaídas principal o de reserva.

## Pruebas

### Caso normal

Entrada:
listaSaltos: [
  { paracaidista: "Mariana Rios", velocidadVientoNudos: 14, alturaSaltoPies: 10000, verificacionEquipo: true },
  { paracaidista: "Jorge Alva", velocidadVientoNudos: 28, alturaSaltoPies: 12000, verificacionEquipo: true },
  { paracaidista: "Luis Cabrera", velocidadVientoNudos: 10, alturaSaltoPies: 9500, verificacionEquipo: false }
]

Resultado esperado:
saltosAprobados: 1
saltosCancelados: 2
motivo: "Evaluación completada. Se aprobó 1 salto seguro. El salto de Jorge Alva fue cancelado por exceso de viento y el de Luis Cabrera por falla en la inspección de su equipo."

### Caso borde

Entrada:
listaSaltos: [
  { paracaidista: "Salto Invalido", velocidadVientoNudos: -5, alturaSaltoPies: 0, verificacionEquipo: true }
]

Resultado esperado:
saltosAprobados: 0
saltosCancelados: 0
motivo: "No se procesaron registros debido a parámetros de vuelo o altitudes físicamente incoherentes."

## Explicacion final

La solución funciona porque opera como un centro de control de lanzamientos aéreos. Mediante una estructura iterativa acoplada a contadores acumuladores, el algoritmo aísla de forma individual cada caso práctico de paracaidismo. Al estructurar condicionales anidados que evalúan secuencialmente las fuerzas del viento y la correcta preparación técnica del equipaje de seguridad, se previene cualquier incidente antes de que los atletas abandonen la aeronave.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.