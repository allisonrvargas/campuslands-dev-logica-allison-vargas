# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de trabajos (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido que la lista tenga trabajos, y luego aplico la regla para identificar si hay alguna reparación bloqueada (crítica) que deba ser atendida primero.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un trabajo está bloqueado, se revisa primero por ser una falla crítica.
2. **Control de vacíos:** Si el taller no tiene trabajos, no se realiza ninguna acción.
3. **Modularidad:** Funciones separadas para validar stock y aplicar el ordenamiento de prioridades.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar este vehículo primero porque tiene una falla crítica de seguridad."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay trabajos pendientes en el taller."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-085/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En un taller mecánico, la seguridad es lo más importante. Al clasificar los trabajos usando esta lógica modular, nos aseguramos de que cualquier vehículo con una falla crítica sea atendido antes que cualquier otro mantenimiento, evitando accidentes y optimizando el tiempo del equipo.