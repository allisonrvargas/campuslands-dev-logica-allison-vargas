# Plantilla de solucion - Pingpong

## Analisis

- **Entrada:** Lista de estados de partidos (items), prioridad y la regla aplicada.
- **Proceso:** La solución valida la existencia de datos y luego compara la lista buscando el estado "bloqueado". Si la regla activa lo exige, se prioriza la revisión de dicho bloqueo antes de cualquier acción normal.
- **Salida:** Acción recomendada con su respectivo motivo.

## Reglas aplicadas

1. **Priorización de Riesgos:** Los estados "bloqueados" tienen prioridad absoluta sobre los estados normales.
2. **Validación:** Se rechaza el procesamiento de listas vacías para evitar errores de ejecución.
3. **Claridad:** El sistema responde con el motivo exacto de la decisión tomada.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza riesgos en el equipamiento o arbitraje antes de continuar los partidos."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "la lista de partidos o estados está vacía."`

## Como revisar la solucion

1. Navegar a `ejercicio-092/resoluciones/allison-vargas/`.
2. Ejecutar con `node allison-vargas.js`.

## Explicacion final

En un torneo de pingpong, la fluidez es clave. Comparar las opciones de estado permite al organizador saber qué partido está listo para jugar y cuál requiere atención técnica inmediata, evitando retrasos innecesarios en la competencia.