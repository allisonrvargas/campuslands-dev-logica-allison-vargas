# Plantilla de solucion

## Analisis

- **Entrada:** Lista de películas (items), prioridad y la regla a seguir.
- **Proceso:** Reviso que haya datos. Si algo sale como "bloqueado", el sistema avisa de una vez para que no se pase por alto ninguna inconsistencia técnica.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si una película tiene datos bloqueados, es lo primero que se revisa.
2. **Control de vacíos:** Si la lista está vacía, no se procesa nada.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque hay un problema con la peli."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay películas en la lista para revisar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-068/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La idea es que el flujo de películas siempre esté limpio. Si alguna tiene un problema o está bloqueada, hay que arreglarlo rápido para que no nos dañe la lista completa y podamos seguir disfrutando del catálogo sin errores.