# Resolución Ejercicio: Mantenimiento Preventivo en Taller Mecánico

## Como pensaste el problema
Se analizó la mecánica como un sistema basado en límites de tolerancia. El componente clave es la comparación entre el `desgasteActual` y el `limiteSeguridad`. Implementé una lógica de "semaforización" (Óptimo, Preventivo, Crítico) para clasificar la urgencia de la intervención.

## Reglas aplicadas
1. **Crítico:** Si el desgaste alcanza o supera el límite, el cambio es obligatorio.
2. **Preventivo:** Si el desgaste llega al 80% del límite, se activa una alerta para evitar fallas catastróficas.
3. **Óptimo:** Si el componente está por debajo del 80%, puede seguir operando con seguridad.

## Como ejecutar o revisar tu solucion
1. Asegúrate de tener Node.js.
2. Ejecuta: `node shen.js`.

## Casos
- **Caso normal:** Desgaste bajo (40%), resultando en estado "Óptimo".
- **Caso borde (Crítico):** Desgaste superior al límite (85% vs 80%), disparando la orden de sustitución.