# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con los estados de los jugadores o partidas (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si existen datos. Si se identifica cualquier estado "bloqueado" (ej. comportamiento antideportivo), el sistema prioriza esta revisión para asegurar la calidad de la experiencia competitiva.
- **Salida:** Un mensaje directo que indica qué acción tomar y el motivo.

## Reglas aplicadas

1. **Protocolo de Fair Play:** La detección de un estado bloqueado es prioridad absoluta para mantener la integridad del juego.
2. **Control de vacíos:** Se valida la existencia de datos para evitar errores en la lógica de emparejamiento.

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

1. Buscar la ruta: `ejercicio-061/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En los videojuegos competitivos, la experiencia del usuario depende de un entorno justo. Esta lógica permite clasificar y priorizar las situaciones conflictivas, permitiendo que el sistema actúe rápidamente ante cualquier irregularidad reportada.