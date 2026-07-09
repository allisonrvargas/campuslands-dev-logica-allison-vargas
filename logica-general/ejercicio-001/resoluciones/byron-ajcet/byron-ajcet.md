# Plantilla de solucion

## Analisis

- Entrada:Lista de elementos (items),Nivel de prioridad, Regla de clasificación. 
- Proceso:Analizar la lista de elementos.
- Salida:La acción que debe realizarse.

## Reglas identificadas

1.Si existe un elemento bloqueado, debe revisarse primero.
2.Si no hay elementos bloqueados, pero sí pendientes, se revisan los pendientes.
3.Si todos los elementos están aprobados, no es necesaria ninguna acción.

## Pruebas

### Caso normal

Entrada:items: items: ["aprobado", "pendiente", "bloqueado"]
prioridad: alta
regla: revisar bloqueados primero

accion: revisar bloqueado
motivo: la regla prioriza riesgos antes de tareas normales.

### Caso borde

Entrada:items: ["aprobado", "aprobado"]
prioridad: baja
regla: revisar bloqueados primero

Resultado esperado:accion: sin acciones
motivo: todos los elementos están aprobados.

## Explicacion final

La solución funciona porque evalúa las condiciones en el orden de prioridad definido por las reglas del problema. Primero verifica si existe un elemento bloqueado, ya que representa el mayor riesgo. Si no lo encuentra, busca elementos pendientes para darles seguimiento. Finalmente, si todos los elementos están aprobados, informa que no hay acciones por realizar. De esta manera, siempre se obtiene un resultado correcto y verificable según las reglas establecidas.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.