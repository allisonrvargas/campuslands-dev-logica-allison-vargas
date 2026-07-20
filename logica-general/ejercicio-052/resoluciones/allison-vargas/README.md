# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de las mesas o implementos de ping-pong (items), la prioridad del torneo y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se detecta cualquier elemento "bloqueado" (mesa rota, raqueta en mal estado), el sistema detiene la preparación para resolver el problema antes de que los jugadores comiencen.
- **Salida:** Un mensaje directo que indica qué acción tomar y el motivo correspondiente.

## Reglas aplicadas

1. **Atención a la calidad:** Si algo está bloqueado, se frena el flujo normal para evitar jugar en condiciones inadecuadas.
2. **Control de vacíos:** Si la lista de chequeo no arroja elementos, se notifica que no hay nada que gestionar.

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

1. Buscar la ruta: `ejercicio-052/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

Esta lógica es fundamental para mantener la calidad en los torneos de ping-pong. Al comparar los estados de los elementos antes de jugar, detectamos cualquier bloqueo a tiempo. Esto asegura que la logística del evento sea impecable y que los jugadores solo se preocupen por ganar.