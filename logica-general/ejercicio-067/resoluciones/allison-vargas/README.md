# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los archivos de audio en la playlist (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si existen datos. Si alguna canción se encuentra "bloqueada" (archivo corrupto o no disponible), el sistema prioriza esta revisión para asegurar una experiencia de usuario sin interrupciones.
- **Salida:** Un mensaje directo que indica la acción correctiva y el motivo.

## Reglas aplicadas

1. **Protocolo de Calidad Musical:** Cualquier estado bloqueado requiere atención inmediata para garantizar la integridad de la playlist.
2. **Control de vacíos:** Se valida la existencia de datos para evitar errores durante la lectura de la lista.

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

1. Buscar la ruta: `ejercicio-067/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La idea aquí es que no se nos escape nada en la playlist. Si alguna canción o archivo está bloqueado, hay que ponerle atención rápido para que la música siga sonando sin problemas y todo esté en orden.