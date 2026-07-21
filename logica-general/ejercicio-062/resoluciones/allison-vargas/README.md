# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los registros de los equipos (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si existen datos. Si cualquier registro de partido o jugador está "bloqueado", el sistema detiene la actualización del ranking para asegurar la transparencia de la tabla de posiciones.
- **Salida:** Un mensaje directo que indica la acción correctiva y el motivo.

## Reglas aplicadas

1. **Integridad del Ranking:** Cualquier registro bloqueado es prioridad máxima para mantener la justicia en la competencia.
2. **Control de vacíos:** Se valida la existencia de datos para evitar errores en el cálculo de las posiciones.

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

1. Buscar la ruta: `ejercicio-062/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En el fútbol sala, mantener un ranking actualizado y veraz es fundamental para la competencia. Esta lógica permite filtrar situaciones irregulares (bloqueos) antes de procesar los resultados oficiales, asegurando que solo los datos validados afecten la tabla de posiciones final.