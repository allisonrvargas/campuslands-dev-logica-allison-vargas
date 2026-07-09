## Analisis

- Entrada: Dos objetos (`reactivos`, `productos`) que mapean el nombre del elemento a la cantidad de átomos presentes en la reacción.
- Proceso: Comparación clave a clave de los objetos para asegurar que la cantidad de materia se conserva en ambos lados de la ecuación.
- Salida: Un booleano de validez y un mensaje explicativo.

## Reglas identificadas

1. Conservación de la masa: Por cada elemento químico, el número de átomos en los reactivos debe ser idéntico al número de átomos en los productos.
2. Validación de existencia: Si un elemento aparece en reactivos, debe estar presente y con el mismo conteo en productos.



[Image of conservation of mass in a chemical reaction]


## Pruebas

### Caso normal

Entrada:
reactivos: { H: 4, O: 2 }, productos: { H: 4, O: 2 }

Resultado esperado:
{ valido: true, mensaje: "La ecuación está balanceada." }

### Caso borde

Entrada:
reactivos: { H: 4, O: 2 }, productos: { H: 2, O: 1 }

Resultado esperado:
{ valido: false, mensaje: "Desbalance en H: 4 en reactivos vs 2 en productos." }

## Explicacion final

La solución utiliza una validación lógica basada en la Ley de Lavoisier. Al iterar sobre las llaves del objeto de reactivos, garantizamos que no se ignore ningún elemento. Este enfoque es la base para construir validadores químicos más complejos que incluyan pesos moleculares y estequiometría.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.