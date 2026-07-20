# Plantilla de solucion

## Analisis

- **Entrada:** Una lista con el estado de los autos hiperdeportivos (items), el nivel de urgencia (prioridad) y la regla de control (regla).
- **Proceso:** Validar si la lista tiene datos. Si durante la búsqueda se encuentra algún auto en estado "bloqueado" (como una falla en los frenos o el motor), el sistema frena las pruebas para solucionar el problema antes de sacarlo a la pista.
- **Salida:** Un mensaje directo que dice qué acción tomar y la explicación del motivo.

## Reglas aplicadas

1. **Atención al peligro:** Si un auto hiperdeportivo está bloqueado por seguridad, se congela el flujo común para corregir la falla mecánica y evitar accidentes a alta velocidad.
2. **Control de vacíos:** Si la lista de chequeo viene sin elementos, el código avisa de inmediato que no hay nada para analizar en el garaje.

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

1. Buscar la ruta: `ejercicio-046/resoluciones/allison-vargas/`.
2. Correr el archivo JavaScript utilizando el comando de Node.js en la terminal.

## Explicacion final

La solución funciona súper bien porque asegura que ningún auto salga a la pista si tiene un problema. Al hacer la búsqueda en la lista de control, el código detecta rápido si hay un hiperdeportivo bloqueado por fallas y nos avisa que paremos. Esto evita riesgos graves a alta velocidad, dejando las tareas de prueba normales en pausa hasta que lo importante quede solucionado.