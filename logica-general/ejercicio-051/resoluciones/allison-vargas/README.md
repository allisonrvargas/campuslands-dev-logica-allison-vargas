# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los peleadores o combates (items), el nivel de urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se detecta alguna situación "bloqueada" (como una lesión o irregularidad), el sistema frena la organización para corregir el problema antes de que inicie la velada.
- **Salida:** Un mensaje directo que dice qué acción tomar y el motivo.

## Reglas aplicadas

1. **Atención al riesgo:** Si un peleador o evento está bloqueado, se congela el flujo para asegurar la salud de los atletas y el orden de la competencia.
2. **Control de vacíos:** Si la lista de chequeo no tiene elementos, el sistema notifica que no hay nada para procesar.

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

1. Buscar la ruta: `ejercicio-051/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución asegura que el evento de kickboxing sea seguro y organizado. Al revisar los estados, detectamos rápido cualquier "bloqueo" (lesiones o problemas logísticos) y evitamos que los combates inicien sin las condiciones necesarias. Es una forma clara de mantener todo bajo control antes de subir al ring.   