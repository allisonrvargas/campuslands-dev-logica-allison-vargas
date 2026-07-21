# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de partidas (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido que existan registros de partidas, y luego clasifico si alguno está bloqueado por error de conexión para darle prioridad.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si una partida tiene un estado bloqueado, se revisa primero para no afectar el torneo.
2. **Control de vacíos:** Si no hay datos, no se realiza ninguna acción.
3. **Modularidad:** Funciones separadas para validar y clasificar los registros.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar este registro de juego primero porque tiene un error de conexión."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay partidas en la lista para clasificar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-081/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En los videojuegos competitivos, la estabilidad del historial de partidas es fundamental. Al separar la lógica en funciones pequeñas, puedo clasificar rápidamente si una partida tiene problemas técnicos, asegurando que el torneo siga su curso sin interrupciones.