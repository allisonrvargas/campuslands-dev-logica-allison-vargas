# Plantilla de solucion

## Analisis

- Entrada:
  - reparaciones:
    - { vehiculo: "Sedan", prioridad: "media", urgente: false }
    - { vehiculo: "Camioneta", prioridad: "alta", urgente: true }
    - { vehiculo: "Motocicleta", prioridad: "alta", urgente: false }
    - { vehiculo: "Pickup", prioridad: "baja", urgente: false }

- Proceso:
  - Revisar si existen reparaciones urgentes.
  - Si no existen, buscar la primera reparación con prioridad alta.
  - Si ninguna cumple las condiciones anteriores, seleccionar el primer trabajo de la lista.

- Salida:
  - siguienteTrabajo: Camioneta
  - motivo: Es una reparación marcada como urgente.

## Reglas identificadas

1. Las reparaciones urgentes tienen la máxima prioridad.
2. Si no hay reparaciones urgentes, se selecciona la primera con prioridad alta.
3. Si no existen trabajos urgentes ni de prioridad alta, se atiende el primer trabajo registrado.

## Pruebas

### Caso normal

Entrada:

reparaciones:
- { vehiculo: "Sedan", prioridad: "media", urgente: false }
- { vehiculo: "Camioneta", prioridad: "alta", urgente: true }
- { vehiculo: "Motocicleta", prioridad: "alta", urgente: false }
- { vehiculo: "Pickup", prioridad: "baja", urgente: false }

Resultado esperado:

siguienteTrabajo: Camioneta
motivo: Es una reparación marcada como urgente.

### Caso borde

Entrada:

reparaciones:
- { vehiculo: "Sedan", prioridad: "media", urgente: false }
- { vehiculo: "Pickup", prioridad: "baja", urgente: false }

Resultado esperado:

siguienteTrabajo: Sedan
motivo: No existen trabajos urgentes ni de prioridad alta.

## Explicacion final

La solución funciona porque evalúa las reparaciones según un orden de prioridad definido. Primero busca trabajos urgentes, luego reparaciones de prioridad alta y, si ninguna cumple esas condiciones, selecciona el primer trabajo disponible. Esto garantiza una asignación consistente y verificable según las reglas establecidas.