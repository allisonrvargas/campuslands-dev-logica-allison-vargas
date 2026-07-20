# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los fragmentos de la película (items), el nivel de urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se detecta alguna escena o efecto bloqueado, el sistema frena la simulación de estados para corregir la falla técnica antes de continuar con la edición.
- **Salida:** Un mensaje directo que dice qué acción tomar y el motivo.

## Reglas aplicadas

1. **Prioridad técnica:** Si un fragmento de la película está bloqueado, se detiene el proceso para evitar errores en la continuidad y calidad de la cinta.
2. **Control de datos:** Si la lista de chequeo llega vacía, el sistema informa que no hay nada que procesar.

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

1. Buscar la ruta: `ejercicio-049/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

Esta solución permite asegurar la calidad técnica en una película de terror. Al simular el estado de cada clip, el código detecta rápidamente si hay algo bloqueado, evitando que un error de edición arruine el resultado final. Mantenemos el flujo de trabajo seguro y eficiente al priorizar las correcciones necesarias antes de seguir con las escenas normales.