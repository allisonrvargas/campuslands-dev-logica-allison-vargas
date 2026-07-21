# Plantilla de solucion - Dibujo Digital

## Analisis

- **Entrada:** Lista de estados de capas/archivos (items), nivel de prioridad y regla de negocio.
- **Proceso:** Se valida primero que el flujo contenga elementos. Posteriormente, se busca el estado "bloqueado" (que representa archivos corruptos o capas inacabadas) para asegurar que se resuelvan antes de exportar el proyecto final.
- **Salida:** Acción final sobre el proceso y la justificación técnica.

## Reglas aplicadas

1. **Integridad del Archivo:** Se impide la exportación si hay capas bloqueadas o corruptas.
2. **Validación:** Se detiene el proceso si no hay capas cargadas.
3. **Modularidad:** Separación de la validación y el motor de reglas de negocio.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza la corrección de archivos corruptos antes de proceder con el renderizado."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "pausar exportacion"`
  `motivo: "la lista de capas o archivos está vacía o es inválida."`

## Como revisar la solucion

1. Navegar a `ejercicio-095/resoluciones/allison-vargas/`.
2. Ejecutar con `node allison-vargas.js`.

## Explicacion final

En dibujo digital, exportar un archivo corrupto significa perder horas de trabajo. Aplicar estas reglas de negocio garantiza que solo los archivos sin errores ("bloqueos") pasen al proceso final, asegurando la calidad del arte digital producido.