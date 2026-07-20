# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de turnos (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido que existan turnos registrados, y luego verifico si alguno está bloqueado para darle prioridad inmediata.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un turno de soldadura tiene un bloqueo, se revisa primero para evitar accidentes.
2. **Control de vacíos:** Si no hay turnos, no se hace nada.
3. **Modularidad:** Funciones separadas para validar y comparar los estados de los turnos.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar este turno primero porque hay un problema de seguridad en la soldadura."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay turnos en la lista para organizar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-078/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En soldadura, los turnos deben estar súper bien coordinados. Al tener esta lógica dividida en funciones pequeñas, me aseguro de detectar rápido si algún turno tiene problemas de seguridad, garantizando que todo el equipo trabaje de forma protegida.