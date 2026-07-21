# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de combates (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el problema en funciones pequeñas para revisar si hay datos y si hay bloqueos. Si algo sale como "bloqueado", el sistema avisa de una vez.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un combate tiene datos bloqueados, es lo primero que se revisa.
2. **Control de vacíos:** Si la lista está vacía, no se hace nada.
3. **Modularidad:** Separé la lógica en funciones pequeñas para que sea más ordenado.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque el combate tiene un problema."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay combates en la lista para revisar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-071/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En el kickboxing, todo tiene que estar bien organizado para que el entrenamiento fluya. Al separar el código en funciones pequeñas, es mucho más fácil ver si hay algún combate bloqueado y atenderlo rápido sin complicaciones.