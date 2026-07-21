# Resolucion - Logica general 043

## Nota
Este ejercicio es identico en contenido al ejercicio 023. Se aplico la misma solucion, con la evaluacion de condiciones especiales separada en su propia funcion.

## Como pensé el problema
Conte los tres estados y cruce esos totales para detectar empate entre bloqueados y pendientes, saturacion del lote, y una instruccion explicita de "escalar" en la regla.

## Reglas aplicadas
- empate entre bloqueados y pendientes + prioridad alta -> revision doble urgente.
- lote saturado + prioridad alta -> escalamiento total.
- lote saturado sin prioridad alta -> revision extendida.
- regla con "escalar" y bloqueado presente -> escalamiento manual.
- bloqueado presente sin combinaciones especiales -> riesgo controlado.
- solo pendientes -> en espera.
- solo aprobados -> sin riesgo.
- items vacio -> sin datos.

## Casos probados
1. Caso normal: 1 bloqueado y 1 pendiente empatados + prioridad alta -> revision doble urgente.
2. Caso borde: items vacio -> sin datos.
3. Caso especial: lote saturado con prioridad media -> revision extendida.