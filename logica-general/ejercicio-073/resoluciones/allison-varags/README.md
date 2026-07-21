# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de chequeo (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero reviso si hay información de seguridad, y luego comparo si hay algo bloqueado para darle prioridad inmediata.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un chequeo de seguridad está bloqueado, se revisa primero sí o sí.
2. **Control de vacíos:** Si no hay datos, no se hace nada.
3. **Modularidad:** Funciones separadas para validar y comparar situaciones.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque la seguridad es lo más importante."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay casos de seguridad en la lista para revisar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-073/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En el paracaidismo la seguridad es lo primero. Al tener el código bien dividido en funciones pequeñas, nos aseguramos de detectar cualquier problema técnico al instante para que todo esté impecable antes del salto.