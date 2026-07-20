# Resolucion - Logica general 042

## Nota
Este ejercicio es identico en contenido al ejercicio 022. Se aplico la misma solucion, reorganizada en funciones independientes por cada detector.

## Como pensé el problema
Separe la validacion en funciones: estructura basica, estados invalidos + duplicados, prioridad sin riesgo, y regla sin contexto. Los errores invalidan el dato; las advertencias no.

## Reglas aplicadas
- items debe ser arreglo no vacio con estados validos -> error si falla.
- prioridad debe ser alta/media/baja -> error si falla.
- regla debe ser texto no vacio -> error si falla.
- item repetido consecutivo -> advertencia.
- prioridad alta sin riesgo real -> advertencia.
- regla sin estado mencionado -> advertencia.
- valido se calcula solo con base en errores.


## Casos probados
1. Caso normal: datos validos, sin casos especiales -> valido true, sin advertencias.
2. Caso borde: items y regla vacios -> valido false, dos errores.
3. Caso especial: tres aprobados repetidos, prioridad alta sin riesgo, regla sin estado -> valido true, tres advertencias.