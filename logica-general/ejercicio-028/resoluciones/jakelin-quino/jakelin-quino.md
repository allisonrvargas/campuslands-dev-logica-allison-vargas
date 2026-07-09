## Analisis

- Entrada: Un arreglo con estados de tareas y un nivel de prioridad.
- Proceso: Recorrer el arreglo para buscar el estado "bloqueado" y verificar si la prioridad es "alta".
- Salida: La acción a ejecutar y el motivo de la decisión.

## Reglas identificadas

1. Si la prioridad es "alta" y existe un ítem "bloqueado", se debe revisar dicho bloqueo obligatoriamente.
2. Si no hay bloqueos o la prioridad no es "alta", el flujo sigue su curso normal.

## Pruebas

### Caso normal

Entrada:
items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta

Resultado esperado:
accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.

### Caso borde

Entrada:
items: ["aprobado", "pendiente"]
prioridad: alta

Resultado esperado:
accion: continuar flujo normal
motivo: no se detectaron bloqueos criticos.

## Explicacion final

Mi solucion funciona recorriendo el arreglo con un ciclo 'for' simple para verificar si el estado 'bloqueado' existe. Utilizo una variable 'bandera' (hayBloqueo) que se vuelve verdadera si encuentra el problema. Finalmente, un condicional 'if' evalúa la combinación de la prioridad y la bandera para decidir el flujo.