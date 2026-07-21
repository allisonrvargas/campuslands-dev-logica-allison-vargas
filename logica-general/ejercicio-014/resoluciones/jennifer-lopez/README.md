# Plantilla de solucion

## Analisis

- Entrada: Una lista con el estado de las agujas de tatuar esterilizadas en el inventario: ["ok", "ok", "usada", "ok", "usada"]`.
- Proceso: El programa recorre el inventario utilizando un ciclo para diagnosticar cuántas agujas presentan el error de estar "usadas" lo que rompe las normas de bioseguridad.

- Salida: El número acumulado de herramientas con error detectadas en el estudio.

## Reglas identificadas

1. Cada aguja en estado "ok" se cuenta como herramienta lista y limpia para trabajar.

2. Si el estado de la aguja es exactamente "usada", el sistema diagnostica un error y lo suma al acumulador de alertas.

3. Si el inventario entero no contiene ningún elemento, el programa debe reportar que el inventario está en cero absoluto.

## Pruebas

### Caso normal
Entrada: inventario: ["ok", "ok", "usada", "ok", "usada"]

Resultado esperado: erroresDetectados: 2, mensaje: "Diagnostico: Se encontraron 2 agujas usadas que deben ser descartadas."

### Caso borde
Entrada: inventario: []
Resultado esperado: erroresDetectados: 0, mensaje: "Alerta: El inventario de herramientas esta completamente vacio."

## Explicacion final
El sistema realiza un diagnóstico en el taller de tatuajes para asegurar la higiene. Mediante el recorrido de la lista, separa los elementos en buen estado de los que contienen errores sanitarios. Si el inventario está vacío, el programa habisa al estudio para que el estudio sepa que necesita reabastecerse.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
