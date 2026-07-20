# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de tatuajes (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero reviso si hay tatuajes en lista, y luego comparo si alguno tiene un error bloqueante para darle prioridad.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un diseño tiene un error bloqueado, se revisa primero para evitar errores en la piel.
2. **Control de vacíos:** Si no hay datos, no se hace nada.
3. **Modularidad:** Funciones separadas para validar disponibilidad y detectar errores críticos.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque el diseño tiene un error."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay tatuajes en la lista para revisar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-074/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En el mundo de los tatuajes, un error es algo serio. Al separar el código en funciones pequeñas, puedo diagnosticar rápido si hay algún bloqueo en el diseño, asegurando que todo esté perfecto antes de empezar a tatuar.