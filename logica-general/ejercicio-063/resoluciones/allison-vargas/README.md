# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de las partidas del torneo (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si existen datos. Si cualquier partida se encuentra "bloqueada" por problemas técnicos, el sistema detiene el avance para garantizar que el torneo se desarrolle bajo condiciones justas.
- **Salida:** Un mensaje directo que indica la acción correctiva y el motivo.

## Reglas aplicadas

1. **Protocolo de Torneo:** Cualquier estado bloqueado requiere atención inmediata para mantener el cronograma del evento.
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

1. Buscar la ruta: `ejercicio-063/resoluciones/allison-vargas/`. 
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En los esports, la fluidez técnica es tan importante como el nivel de habilidad. Esta lógica permite a los organizadores identificar bloqueos técnicos rápidamente, asegurando que el torneo no sufra retrasos innecesarios y se mantenga el estándar competitivo.