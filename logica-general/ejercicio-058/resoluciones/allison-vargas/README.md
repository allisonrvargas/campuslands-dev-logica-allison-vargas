# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de las piezas o turnos de soldadura (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si existen datos. Si se identifica cualquier pieza "bloqueada" (por fallo en la soldadura o falta de seguridad), el sistema detiene el flujo para corregir el inconveniente antes de seguir con el siguiente turno.
- **Salida:** Un mensaje directo que indica qué acción tomar y el motivo.

## Reglas aplicadas

1. **Atención a la calidad:** Cualquier estado "bloqueado" es prioridad para evitar piezas defectuosas en la línea de soldadura.
2. **Control de vacíos:** Si no hay turnos registrados, el sistema avisa que no hay nada que gestionar.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza riesgos antes de tareas normales."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no se encontraron elementos registrados en la lista para evaluar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-058/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La soldadura es un proceso crítico en la manufactura. Esta lógica asegura que los turnos y las piezas se revisen exhaustivamente, detectando cualquier anomalía antes de que afecte la producción total. Es un sistema de prevención fundamental.