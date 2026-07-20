# Plantilla de solucion - Kickboxing

## Analisis

- **Entrada:** Lista de estados de combate (items), nivel de prioridad y regla de negocio.
- **Proceso:** Se implementó una función integradora que valida primero la existencia de datos. Posteriormente, utiliza condicionales para detectar estados "bloqueados" (posibles lesiones o fallas técnicas) y aplicar la priorización de revisión antes de avanzar a los estados normales.
- **Salida:** Un objeto con la acción a ejecutar y una justificación clara.

## Reglas aplicadas

1. **Prioridad de seguridad:** Cualquier estado "bloqueado" detiene el flujo normal para revisión inmediata.
2. **Integridad de datos:** Se descarta el procesamiento si no hay una lista válida.
3. **Modularidad:** Separación de la validación y la lógica de decisión.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza la revisión de lesiones o bloqueos técnicos antes de continuar el entrenamiento."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "la lista de combates/entrenamientos está vacía."`

## Como revisar la solucion

1. Navegar a `ejercicio-091/resoluciones/allison-vargas/`.
2. Ejecutar con `node allison-vargas.js`.

## Explicacion final

En el kickboxing, la seguridad es fundamental. Organizar las listas de entrenamiento nos permite identificar qué atletas necesitan atención inmediata o qué técnicas están bloqueadas, evitando lesiones y mejorando la eficiencia del entrenamiento.