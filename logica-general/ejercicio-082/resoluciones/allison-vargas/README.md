# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de jugadores/equipos (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido que la estructura de datos sea correcta, y luego detecto si hay alguna inconsistencia (bloqueo) en el ranking para darle prioridad.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Validación de Integridad:** Si los datos no son válidos, no se puede procesar el ranking.
2. **Prioridad ante fallos:** Si un registro está marcado como "bloqueado", se revisa primero.
3. **Modularidad:** Funciones separadas para validar datos y detectar errores críticos.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar este registro primero porque tiene una inconsistencia en el puntaje."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "los datos del ranking no son válidos o están vacíos."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-082/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En un torneo de fútbol sala, los datos del ranking deben ser exactos para que la tabla de posiciones sea justa. Al validar cada dato antes de procesarlo, evitamos errores y aseguramos que el ranking sea confiable para todos los equipos.