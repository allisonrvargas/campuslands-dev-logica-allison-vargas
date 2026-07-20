# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de instrucciones de viaje (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero valido que las instrucciones existan, y luego detecto si alguna está bloqueada (problemas con reservas) para priorizarla.
- **Salida:** Qué acción tomar y por qué.

## Reglas aplicadas

1. **Prioridad ante problemas:** Si una instrucción tiene estado "bloqueado", es prioridad absoluta revisarla.
2. **Control de vacíos:** Si no hay instrucciones, no se realiza ninguna acción.
3. **Modularidad:** Funciones separadas para validar y procesar las instrucciones de viaje.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esta instrucción primero porque hay un problema con la reserva del viaje."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay instrucciones de viaje en la lista para procesar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-090/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En turismo, seguir correctamente las instrucciones es vital para evitar errores en las reservas. Al automatizar la lectura y validación de estados, aseguro que cualquier problema crítico sea atendido de inmediato antes de afectar el itinerario del viajero.