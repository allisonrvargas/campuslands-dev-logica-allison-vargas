# Plantilla de solucion

## Analisis

- **Entrada:** Lista de productos (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido que el inventario tenga productos, y luego comparo si existe algún bloqueo lógico para darle prioridad.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un producto está marcado como "bloqueado", se revisa de inmediato.
2. **Control de vacíos:** Si la lista está vacía, no se procesa ninguna acción.
3. **Modularidad:** Funciones separadas para validar stock y detectar urgencias.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque hay un problema lógico en el inventario."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay nada en el inventario para revisar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-079/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La idea es mantener el inventario lógico bien ordenado. Al separar el código, es súper fácil detectar si algún producto tiene un problema de estado y atenderlo rápido para que no afecte el conteo final del inventario.