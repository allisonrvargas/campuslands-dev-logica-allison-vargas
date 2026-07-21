# Resolucion - Logica general 041

## Nota
Este ejercicio es identico en contenido al ejercicio 021 (clasificacion por reglas, videojuegos competitivos, mismas condiciones combinadas). Se aplico la misma solucion.

## Como pensé el problema
Definí cuatro condiciones booleanas (hayBloqueado, mayoriaBloqueada, prioridadAlta, todosIguales) combinadas con AND para cubrir casos especiales.

## Reglas aplicadas
- mayoriaBloqueada AND prioridadAlta -> "critico global".
- hayBloqueado AND prioridadAlta (sin mayoria) -> "riesgo puntual alto".
- hayBloqueado sin prioridad alta -> "riesgo puntual".
- todosIguales y "aprobado" -> "lote limpio".
- todosIguales y "pendiente" -> "lote en espera".
- mezcla sin bloqueados y sin ser todos iguales -> "mixto sin riesgo".
- items vacio -> sin datos.


## Casos probados
1. Caso normal: 1 bloqueado de 3 + prioridad alta -> riesgo puntual alto.
2. Caso borde: items vacio -> sin datos.
3. Caso borde: mayoria bloqueada + prioridad alta -> critico global.
4. Caso especial: todos pendientes -> lote en espera.