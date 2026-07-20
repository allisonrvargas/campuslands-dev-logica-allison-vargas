# Plantilla de solucion

## Analisis

- **Entrada:** Lista de estados de elementos arquitectónicos (items), prioridad y la regla a seguir.
- **Proceso:** Dividí el código en funciones pequeñas. Primero reviso si hay elementos en la lista, y luego aplico la tabla de decisión para ver si hay algún bloqueo estructural que deba atenderse primero.
- **Salida:** Qué hay que hacer y por qué.

## Reglas aplicadas

1. **Prioridad ante fallos:** Si un elemento de la estructura 3D está bloqueado, se revisa primero para evitar errores de diseño.
2. **Control de vacíos:** Si no hay datos, no se hace nada.
3. **Modularidad:** Funciones separadas para validar y tomar decisiones según el estado.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "toca revisar esto primero porque el modelo tiene un error de estructura."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no hay elementos de arquitectura en la lista para decidir."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-077/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

En arquitectura 3D, cualquier error en la estructura es un dolor de cabeza. Al usar esta lógica, puedo tomar decisiones rápidas sobre qué elementos revisar primero, asegurando que el modelo final sea sólido y no tenga errores técnicos.