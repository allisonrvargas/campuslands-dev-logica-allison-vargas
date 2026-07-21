# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los equipos y condiciones de salto (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si existen datos. Si cualquier elemento vital está "bloqueado" (ej. paracaídas sin inspección), el sistema detiene el proceso para garantizar la máxima seguridad antes de cualquier salto.
- **Salida:** Un mensaje de acción clara y el motivo de seguridad.

## Reglas aplicadas

1. **Protocolo de seguridad:** Cualquier estado "bloqueado" es una prioridad absoluta de revisión.
2. **Control de vacíos:** Si la lista de chequeo está vacía, el sistema advierte que no hay información para evaluar.

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

1. Buscar la ruta: `ejercicio-053/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript con Node.js.

## Explicacion final

La seguridad en el paracaidismo no permite errores. Esta solución organiza los datos de manera que, ante cualquier indicio de bloqueo en los equipos o condiciones, el sistema alerte al instructor inmediatamente. Esto ayuda a prevenir accidentes y asegura que cada salto cumpla con los estándares técnicos que se requieren