# Plantilla de solucion - Comida Urbana

## Analisis

- **Entrada:** Lista de estados de pedidos (items), prioridad y la regla de selección aplicada.
- **Proceso:** Se valida la existencia de pedidos activos. Si existen pedidos marcados como "bloqueados" (inconsistencias), se prioriza su revisión sobre el despacho normal, siguiendo la estrategia de selección para mantener el flujo de cocina.
- **Salida:** Acción de cocina a ejecutar y motivo de la decisión.

## Reglas aplicadas

1. **Prioridad de Bloqueo:** Los pedidos bloqueados (problemas de insumos o errores) tienen prioridad de revisión.
2. **Validación:** Se detiene el proceso si no hay pedidos en lista.
3. **Modularidad:** Separación de funciones para mantener la lógica de despacho limpia.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "bloqueado", "pendiente"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza la resolución de pedidos con inconsistencias antes de continuar con el despacho."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "pausar cocina"`
  `motivo: "la lista de pedidos es inválida o no hay órdenes activas."`

## Como revisar la solucion

1. Navegar a `ejercicio-100/resoluciones/allison-vargas/`.
2. Ejecutar con `node allison-vargas.js`.

## Explicacion final

En el servicio de comida urbana, el tiempo es dinero y la calidad es la reputación. Esta lógica asegura que los pedidos con problemas no se queden estancados, permitiendo que la cocina tome decisiones rápidas y mantenga el despacho funcionando sin errores humanos.