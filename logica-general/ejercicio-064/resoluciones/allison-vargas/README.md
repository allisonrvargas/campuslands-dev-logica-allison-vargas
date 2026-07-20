# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de las motos en inventario (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si existen datos. Si cualquier moto se encuentra "bloqueada", el sistema prioriza esta revisión para asegurar que el inventario esté actualizado y operativo.
- **Salida:** Un mensaje directo que indica la acción correctiva y el motivo.

## Reglas aplicadas

1. **Protocolo de Inventario:** Cualquier estado bloqueado requiere atención inmediata para mantener el control de la flota.
2. **Control de vacíos:** Se valida la existencia de datos para evitar errores de procesamiento.

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

1. Buscar la ruta: `ejercicio-064/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

Gestionar un inventario de motos requiere orden y precisión. Esta lógica permite identificar rápidamente cualquier unidad que no cumpla con los estándares operativos, permitiendo una gestión más eficiente y segura de los activos.