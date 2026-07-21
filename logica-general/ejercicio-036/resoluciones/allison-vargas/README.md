# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los componentes de la animación (items), el nivel de urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista contiene información. Si se encuentra algún elemento o fotograma en estado "bloqueado", el sistema frena el proceso para solucionar el error antes de empezar el renderizado final.
- **Salida:** Un mensaje directo indicando qué acción tomar y la explicación del porqué.

## Reglas aplicadas

1. **Atención al error:** Si algo vital en la escena está bloqueado, se congela el flujo común para corregir la falla y evitar que el render se dañe.
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

1. Buscar la ruta: `ejercicio-036/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución funciona súper bien porque protege el tiempo del animador. Al revisar los estados del proyecto 3D, el código detecta rápido si hay un fotograma corrupto o un error bloqueando la escena y nos avisa que paremos. Esto evita que gastemos horas renderizando un archivo que va a salir con fallas, dejando los pendientes comunes en pausa hasta asegurar que lo importante esté arreglado.