# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de las órdenes de reparación (items), el nivel de urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se encuentra alguna orden en estado "bloqueado" (falta de pieza o error crítico), el sistema frena el flujo para solucionar el problema antes de seguir con el resto de reparaciones.
- **Salida:** Un mensaje directo que dice qué acción tomar y el motivo.

## Reglas aplicadas

1. **Atención al problema:** Si alguna reparación está bloqueada, se detiene el trabajo común para corregir la falla y evitar que el taller pierda tiempo con vehículos que no se pueden terminar.
2. **Control de vacíos:** Si la lista de chequeo viene sin elementos, el código avisa de inmediato que no hay nada para analizar.

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

1. Buscar la ruta: `ejercicio-045/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución funciona súper bien porque ayuda a que el taller trabaje de forma ordenada. Al revisar la lista de trabajo, el código detecta rápido si hay un bloqueo (como la falta de un repuesto) y nos avisa que paremos ahí. Esto evita que intentemos reparar un carro sin las piezas necesarias, dejando los trabajos pendientes en pausa hasta asegurar que todo esté listo para continuar.