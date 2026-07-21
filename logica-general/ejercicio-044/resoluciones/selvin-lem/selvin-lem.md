# Resolucion - Logica general 044

## Nota
Este ejercicio es identico en contenido al ejercicio 024. Se aplico la misma solucion, con cada regla especial separada en su propia funcion.

## Como pensé el problema
Combine el criterio base por prioridad con dos casos especiales: lotes pequeños que fuerzan revision de bloqueados, y una instruccion explicita en la regla para excluir aprobados.

## Reglas aplicadas
- prioridad alta -> filtra bloqueado y pendiente; media -> solo bloqueado; baja -> no filtra (salvo lote pequeño).
- lote de 2 items o menos con prioridad baja -> se fuerza el filtro de bloqueado.
- regla con "excluir" y "aprobado" -> saca los aprobados del resultado.
- todos bloqueados -> no se filtra nada.
- items vacio -> filtrados y excluidos vacios.


## Casos probados
1. Caso normal: prioridad alta con items mixtos -> filtrados pendiente y bloqueado.
2. Caso borde: items vacio -> vacios.
3. Caso especial: lote de 2 con regla "excluir aprobados" -> filtra bloqueado y excluye aprobado.
4. Caso especial: todos bloqueados -> se devuelven todos.