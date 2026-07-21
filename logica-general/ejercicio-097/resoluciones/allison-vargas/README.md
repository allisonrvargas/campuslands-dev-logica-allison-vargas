# Plantilla de solucion - Arquitectura 3D

## Analisis

- **Entrada:** Lista de estados de elementos arquitectónicos (elementos) y la regla de decisión.
- **Proceso:** Implementé una tabla de decisión lógica que evalúa si hay elementos "bloqueados" (errores estructurales) o "pendientes" (ajustes visuales). Se prioriza siempre la resolución de errores bloqueantes.
- **Salida:** Acción recomendada para el flujo de trabajo del diseño.

## Reglas aplicadas

1. **Prioridad Estructural:** Los errores bloqueantes deben resolverse antes de cualquier ajuste estético.
2. **Jerarquía de estados:** Si no hay bloqueos, se atienden los pendientes. Si todo está aprobado, se finaliza el renderizado.
3. **Validación:** Se rechaza el procesamiento si la lista de entrada está vacía.

## Pruebas

### Caso normal (Bloqueo detectado)
- **Entrada:** `elementos: ["aprobado", "bloqueado", "pendiente"]`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza la corrección de errores estructurales bloqueantes en el diseño 3D."`

### Caso borde (Sin bloqueos, solo pendientes)
- **Entrada:** `elementos: ["aprobado", "pendiente"]`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "continuar con ajustes"`
  `motivo: "existen elementos pendientes que requieren revisión de texturas o iluminación."`

## Como revisar la solucion

1. Navegar a `ejercicio-097/resoluciones/allison-vargas/`.
2. Ejecutar con `node allison-vargas.js`.

## Explicacion final

En arquitectura 3D, un error estructural bloqueante puede dejar de que funcione todo el modelo. Esta tabla de decisión automatiza la priorización, asegurando que el diseñador se enfoque primero en la integridad del modelo y luego en los detalles visuales de texturizado.