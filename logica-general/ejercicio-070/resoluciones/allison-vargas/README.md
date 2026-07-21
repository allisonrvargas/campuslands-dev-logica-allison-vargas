# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados del itinerario (items), prioridad y la regla a seguir.
- **Proceso:** Reviso que haya datos. Si algo sale como "bloqueado", el sistema avisa de una vez para resolverlo rápido y no arruinar el viaje.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un componente del viaje está bloqueado, se revisa primero.
2. **Control de vacíos:** Si la lista está vacía, no se hace nada.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque hay un problema con el viaje."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay nada en el itinerario para revisar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-070/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La idea es que todo en el viaje salga perfecto. Si algo está bloqueado, hay que ponerle atención rápido para que no nos dañe los planes y todo siga funcionando como debería.