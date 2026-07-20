# Resolucion - Logica general 045

## Nota
Este ejercicio es identico en contenido al ejercicio 025. Se aplico la misma solucion, con la comparacion y deteccion de inversion separadas en funciones.

## Como pensé el problema
Combine el peso base con dos condiciones especiales: una instruccion en la regla que invierte toda la tabla de pesos, y un criterio secundario que invierte el orden interno de los bloqueados empatados con prioridad alta.

## Reglas aplicadas
- peso base: bloqueado 0, pendiente 1, aprobado 2.
- regla "aprobados primero" -> invierte la tabla completa.
- empate entre bloqueados + prioridad alta -> invierte su orden interno.
- empate en cualquier otro caso -> conserva orden original.
- items vacio -> ordenados vacio.

## Casos probados
1. Caso normal: aprobado, pendiente, bloqueado con prioridad alta -> bloqueado, pendiente, aprobado.
2. Caso borde: items vacio -> ordenados vacio.
3. Caso especial: dos bloqueados empatados con prioridad alta -> se invierte su orden interno.
4. Caso especial: regla "aprobados primero" -> se invierte la tabla de pesos.