# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de partidas (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido que la lista sea correcta, y luego aplico la regla para tomar decisiones sobre qué revisar primero si hay bloqueos técnicos.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un estado de partida está "bloqueado", se debe revisar primero.
2. **Control de vacíos:** Si no hay datos, no se toma ninguna acción.
3. **Modularidad:** Funciones separadas para validar y tomar la decisión final.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar este estado primero porque el torneo tiene un bloqueo técnico."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay estados de partida en la lista para tomar decisiones."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-083/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En un torneo de esports, cada segundo cuenta. Al automatizar la toma de decisiones con este código modular, puedo identificar rápidamente cualquier problema técnico en el flujo de las partidas, manteniendo el torneo bajo control y funcionando sin problemas.