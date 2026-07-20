# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de partidos (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido si hay partidos, y luego comparo si alguno está bloqueado para priorizarlo.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un partido tiene datos bloqueados, se revisa primero.
2. **Control de vacíos:** Si no hay partidos, no se procesa nada.
3. **Modularidad:** Funciones separadas para validar y comparar opciones.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque el partido tiene un problema."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay partidos en la lista para comparar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-072/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En el pingpong la agilidad es clave, y en el código también. Al separar el problema en funciones pequeñas, nos aseguramos de que comparar los partidos sea rápido y ordenado, sin que se nos pase ningún error técnico en el torneo.