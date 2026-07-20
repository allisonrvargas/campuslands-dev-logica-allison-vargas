# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los pedidos de comida urbana (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si existen datos. Si se identifica cualquier pedido "bloqueado" (ej. ingrediente agotado), el sistema detiene el flujo para corregir el inconveniente antes de despachar.
- **Salida:** Un mensaje directo que indica la acción correctiva y el motivo.

## Reglas aplicadas

1. **Protocolo de despacho:** La detección de un pedido bloqueado es prioridad absoluta para evitar clientes insatisfechos.
2. **Control de vacíos:** Se valida la existencia de datos para evitar errores en la gestión de turnos de entrega.

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

1. Buscar la ruta: `ejercicio-060/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En el negocio de la comida urbana, el tiempo y la precisión son clave. Esta lógica permite organizar los pedidos de forma efrctiva, asegurando que cualquier bloqueo sea detectado antes de que afecte la cadena de entrega, garantizando así un servicio rápido y de calidad.