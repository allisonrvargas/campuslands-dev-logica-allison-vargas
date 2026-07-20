# Plantilla de solucion - Soldadura

## Analisis

- **Entrada:** Lista de estados de piezas (items), prioridad y regla de turno.
- **Proceso:** Se implementó una función integradora que valida la disponibilidad de piezas. Utiliza una lógica de prioridades para detectar soldaduras "bloqueadas" (posibles fisuras o fallas) antes de permitir que el turno de soldadura continúe.
- **Salida:** Acción de gestión de turno y motivo justificado.

## Reglas aplicadas

1. **Prioridad de Inspección:** Cualquier pieza bloqueada detiene el turno para asegurar la calidad de la soldadura.
2. **Validación:** Se rechaza el procesamiento si la lista de turnos es vacía.
3. **Modularidad:** Separación de funciones para mantener la lógica clara y testeable.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "bloqueado", "pendiente"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza la inspección de soldaduras críticas antes de avanzar al siguiente turno."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "pausar taller"`
  `motivo: "la lista de piezas a soldar es inválida o no hay turnos pendientes."`

## Como revisar la solucion

1. Navegar a `ejercicio-098/resoluciones/allison-vargas/`.
2. Ejecutar con `node allison-vargas.js`.

## Explicacion final

En soldadura, una mala unión es un riesgo grave. Implementar este sistema de turnos garantiza que las piezas con estados críticos sean identificadas y aisladas automáticamente, asegurando que solo el trabajo de alta calidad avance en la línea de producción.