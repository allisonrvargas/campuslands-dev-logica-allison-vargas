# Plantilla de solucion

## Analisis

- Entrada: Un arreglo de objetos, donde cada objeto representa un vehículo con `placa`, `tipo` de reparación y `tiempoEstimado` (minutos).
- Proceso: Aplicar un ordenamiento que prioriza primero la severidad del servicio y, ante igual severidad, prioriza el trabajo más corto.
- Salida: Un arreglo ordenado según la prioridad del taller.

## Reglas identificadas

1. Prioridad alta: "emergencia" > "mantenimiento" > "revision".
2. Desempate: Si dos vehículos tienen la misma prioridad, se atiende primero el que requiera menos tiempo.

## Pruebas

### Caso normal

Entrada:
[{ placa: "ABC-123", tipo: "mantenimiento", tiempoEstimado: 60 }, { placa: "XYZ-789", tipo: "emergencia", tiempoEstimado: 120 }]

Resultado esperado:
[{ placa: "XYZ-789", tipo: "emergencia", tiempoEstimado: 120 }, { placa: "ABC-123", tipo: "mantenimiento", tiempoEstimado: 60 }]

### Caso borde

Entrada:
[{ placa: "LMN-456", tipo: "emergencia", tiempoEstimado: 30 }, { placa: "XYZ-789", tipo: "emergencia", tiempoEstimado: 120 }]

Resultado esperado:
[{ placa: "LMN-456", tipo: "emergencia", tiempoEstimado: 30 }, { placa: "XYZ-789", tipo: "emergencia", tiempoEstimado: 120 }]

## Explicacion final

La solución utiliza un diccionario de prioridades (`prioridades`) para asignar valores numéricos a los tipos de servicio, permitiendo una comparación aritmética sencilla dentro del método `sort`. Si los valores son iguales, el código compara directamente `tiempoEstimado` para optimizar el flujo de trabajo del taller.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.