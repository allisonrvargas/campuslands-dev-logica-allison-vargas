# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con los estados de seguridad de la soldadura (items), el nivel de urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se detecta alguna máquina o equipo en estado "bloqueado", el sistema frena el turno para solucionar el problema antes de encender las herramientas.
- **Salida:** Un mensaje directo que dice qué acción tomar y la explicación del motivo.

## Reglas aplicadas

1. **Seguridad ante todo:** Si algo importante en el taller está bloqueado, se detiene el flujo común para corregir la falla y evitar accidentes con las máquinas.
2. **Validación de datos:** Si la lista de chequeo no tiene elementos, el código notifica que no hay nada para analizar.

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

1. Buscar la ruta: `ejercicio-038/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución funciona súper bien porque protege al soldador antes de iniciar su turno. Al revisar la lista de control del taller, el código encuentra rápido si hay un error de seguridad o un equipo bloqueado y nos avisa que paremos. Esto evita que empecemos a trabajar en un entorno peligroso o con fallas, dejando los pendientes comunes en pausa hasta asegurar que todo esté en orden.