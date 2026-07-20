# Plantilla de solucion - Tatuajes

## Analisis

- **Entrada:** Lista de estados del proceso (items), prioridad y la regla aplicada.
- **Proceso:** Se implementó una función integradora que valida la integridad de la lista de estados. Luego, detecta si existe un estado "bloqueado" (ej. equipo no esterilizado) para priorizar su resolución antes de proceder con el tatuaje.
- **Salida:** Acción a tomar (iniciar/detener/revisar) y la justificación.

## Reglas aplicadas

1. **Prioridad Sanitaria:** Cualquier bloqueo técnico detiene el proceso para garantizar la seguridad del cliente.
2. **Validación:** Se rechaza el proceso si los datos de entrada son nulos o vacíos.
3. **Modularidad:** Separación de funciones para mantener la lógica de decisión limpia.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza la revisión de agujas o tintas antes de iniciar el tatuaje para evitar infecciones."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "detener proceso"`
  `motivo: "los estados del equipo de tatuaje no son válidos o la lista está vacía."`

## Como revisar la solucion

1. Navegar a `ejercicio-094/resoluciones/allison-vargas/`.
2. Ejecutar con `node allison-vargas.js`.

## Explicacion final

En el tatuaje, la salud es prioridad. Esta lógica de diagnóstico permite identificar automáticamente si algún elemento crítico está comprometido, evitando riesgos sanitarios y asegurando que cada tatuaje se realice bajo estándares estrictos de higiene.