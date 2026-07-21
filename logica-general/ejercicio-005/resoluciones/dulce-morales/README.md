# Plantilla de solucion

## Analisis

- Entrada: Un arreglo `listaVehiculos` con objetos que representan órdenes de reparación (propiedades `placa`, `fallaTipo` e `ingresoHoras`) y una regla de prioridad especificada.
- Proceso: Clasificar y ordenar las órdenes de trabajo del taller mecánico de acuerdo con la gravedad de la falla mecánica detectada para organizar la cola de los técnicos.
- Salida: Un arreglo ordenado con los vehículos que deben ser atendidos con mayor urgencia y la descripción del motivo de asignación.

## Reglas identificadas

1. Regla de Prioridad de Riesgo: Los vehículos con fallas en los frenos (`"frenos"`) o sistemas de dirección tienen prioridad crítica absoluta sobre mantenimientos preventivos o cambios de aceite.
2. Regla de Tiempo de Espera: A igualdad de gravedad en la falla mecánica, el vehículo que ingresó primero al taller (menor valor en `ingresoHoras`) debe ser atendido primero.

## Pruebas

### Caso normal

Entrada:
listaVehiculos: [
  { placa: "M-456B", fallaTipo: "cambio_aceite", ingresoHoras: 3 },
  { placa: "P-123A", fallaTipo: "frenos", ingresoHoras: 2 },
  { placa: "P-789C", fallaTipo: "frenos", ingresoHoras: 1 }
]

Resultado esperado:
ordenAtencion: ["P-789C", "P-123A", "M-456B"]
motivo: "Se priorizan los fallos en sistema de frenos. Al haber empate, el vehículo P-789C se atiende primero por registrar mayor tiempo de espera desde su ingreso."

### Caso borde

Entrada:
listaVehiculos: []

Resultado esperado:
ordenAtencion: []
motivo: "No hay vehículos en la cola de espera del taller mecánico."

## Explicacion final

La solución funciona porque implementa el método nativo de ordenamiento analizando dos niveles jerárquicos (Multi-level Sort). En primer lugar, mapea el tipo de falla mecánica a un valor numérico de peso jerárquico para empujar los riesgos críticos al inicio de la fila. En segundo lugar, resuelve los empates técnicos mediante una comparación cronológica basada en la hora de ingreso, garantizando un flujo justo y seguro en el taller.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.