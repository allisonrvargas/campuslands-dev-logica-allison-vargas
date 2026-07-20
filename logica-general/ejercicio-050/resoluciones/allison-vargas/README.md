# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de las reservas (items), el nivel de urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se encuentra alguna reserva en estado "bloqueado" (problemas con el pago o disponibilidad), el sistema interrumpe el flujo para resolver el inconveniente antes de confirmar el viaje al cliente.
- **Salida:** Un mensaje directo que indica qué acción tomar y el motivo correspondiente.

## Reglas aplicadas

1. **Gestión de incidencias:** Si una reserva presenta un bloqueo, se prioriza su solución para evitar que el viajero tenga problemas al llegar a su destino.
2. **Control de vacíos:** Si el sistema de reservas no arroja resultados, se notifica inmediatamente que no hay nada que procesar.

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

1. Buscar la ruta: `ejercicio-050/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

Esta lógica es vital para garantizar un servicio de turismo impecable. Al verificar paso a paso las reservas, detectamos a tiempo si existe algún bloqueo que impida el éxito del viaje. Con esta solución, logramos un sistema eficiente que prioriza los errores críticos para que el usuario siempre tenga una experiencia sin contratiempos.