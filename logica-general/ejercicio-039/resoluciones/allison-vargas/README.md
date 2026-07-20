# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los componentes químicos (items), el nivel de urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si se detecta algún elemento en estado "bloqueado", el sistema frena el proceso para solucionar el problema antes de manipular las fórmulas o reactivos.
- **Salida:** Un mensaje directo que dice qué acción tomar y la explicación del motivo.

## Reglas aplicadas

1. **Seguridad ante todo:** Si algún compuesto químico está bloqueado, se congela el flujo común para corregir la falla y evitar accidentes o reacciones peligrosas en el laboratorio.
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

1. Buscar la ruta: `ejercicio-039/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución funciona súper bien porque protege el laboratorio antes de manipular sustancias. Al revisar la lista de control de las fórmulas químicas, el código encuentra rápido si hay algún reactivo inestable o envase bloqueado y nos avisa que paremos. Esto evita que empecemos a mezclar componentes en un entorno peligroso, dejando las tareas comunes en pausa hasta asegurar que todo esté bajo control.