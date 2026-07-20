# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con los estados del proyecto de dibujo (items), la urgencia (prioridad) y el tipo de regla (regla).
- **Proceso:** Comprobar si la lista tiene datos cargados. Si el sistema encuentra algún archivo o capa en estado "bloqueado", se detiene a revisarlo primero para asegurar que el archivo no se dañe.
- **Salida:** Un texto corto que te indica qué hacer y el motivo.

## Reglas aplicadas

1. **Prioridad al peligro:** Si algo importante está bloqueado, se frena el flujo normal para arreglar el fallo antes de exportar la ilustración.
2. **Control de vacíos:** Si nos envían una lista sin elementos, el código avisa de inmediato que no hay nada para evaluar.

## Pruebas

### Caso normal
- **Entrada:** `items: ["aprobado", "pendiente", "bloqueado"]`, `prioridad: "alta"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "revisar bloqueado"`
  `motivo: "la regla prioriza riesgos antes de tareas normales."`

### Caso borde
- **Entrada:** `items: []`, `prioridad: "baja"`, `regla: "revisar bloqueados primero"`
- **Resultado:** 
  `accion: "sin accion inmediata"`
  `motivo: "no se encontraron elementos registrados en la lista para evaluar."`

## Como revisar la solucion

1. Buscar la ruta: `ejercicio-035/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript con el comando de Node.js en la terminal.

## Explicacion final

La solución funciona súper bien porque cuida el trabajo del ilustrador. Al revisar la lista de control del lienzo digital, el código encuentra rápido si hay algún error pesado o capa bloqueada y nos avisa que debemos parar a corregirlo. Esto evita que perdamos tiempo intentando guardar o exportar un dibujo que tiene fallas, dejando lo demás en pausa hasta resolver lo importante.