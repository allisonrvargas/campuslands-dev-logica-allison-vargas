# Plantilla de solucion

## Analisis

- **Entrada:** Matriz de estados de render (items), y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido que la matriz tenga datos, y luego verifico si hay algún frame bloqueado para darle prioridad inmediata.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un frame está bloqueado, se revisa primero para que la animación 3D no se detenga.
2. **Control de vacíos:** Si no hay datos, no se procesa nada.
3. **Modularidad:** Funciones separadas para validar y comparar los estados de renderizado.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque el frame tiene un problema de render."`

### Caso borde
- **Entrada:** `items: []`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "la lista de estados está vacía."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-076/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En animación 3D, un frame bloqueado puede arruinar toda una secuencia. Al organizar la lógica en funciones pequeñas, me aseguro de detectar rápido cualquier problema en los estados de renderizado para que la animación termine a tiempo y sin errores.