# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los componentes del modelo arquitectónico (items), el nivel de urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista contiene información. Si se detecta alguna capa o plano en estado "bloqueado", el sistema detiene el proceso para corregir la falla antes de continuar con la renderización o simulación de la estructura.
- **Salida:** Un mensaje directo que dice qué acción tomar y la explicación del motivo.

## Reglas aplicadas

1. **Atención al error:** Si algo importante en el modelo de arquitectura está bloqueado, se congela el flujo común para corregir el fallo y evitar que el plano se dañe.
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

1. Buscar la ruta: `ejercicio-037/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución funciona súper bien porque protege el tiempo del arquitecto digital. Al revisar los estados del proyecto de arquitectura 3D, el código detecta rápido si hay un error de estructura o una capa bloqueando el plano y nos avisa que paremos. Esto evita que sigamos avanzando o renderizando un archivo que va a salir con fallas, dejando los pendientes comunes en pausa hasta asegurar que lo importante esté arreglado.