# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de las motos (items), la urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se encuentra alguna moto en estado "bloqueado" (falta de papeles o mantenimiento), el sistema frena cualquier movimiento en el inventario para corregir el inconveniente antes de continuar.
- **Salida:** Un mensaje directo que dice qué acción tomar y la explicación del motivo.

## Reglas aplicadas

1. **Atención al problema:** Si algún vehículo importante está bloqueado, se congela el flujo común para corregir la falla y evitar errores en el inventario.
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

1. Buscar la ruta: `ejercicio-044/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución funciona súper bien porque ayuda a que el inventario de motos sea siempre exacto y seguro. Al revisar la lista de control, el código encuentra rápido si hay algún problema con un vehículo bloqueado y nos avisa que paremos. Esto evita que registremos entradas o salidas erróneas, dejando las tareas comunes en pausa hasta que lo importante quede solucionado.