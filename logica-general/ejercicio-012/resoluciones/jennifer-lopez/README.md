# Plantilla de solucion

## Analisis

- Entrada: Una lista con las marcas de pelotas elegidas por los jugadores en un torneo: ["Stiga", "Butterfly", "Stiga", "Nittaku", "Stiga"].

- Proceso: El programa recorre la lista usando un ciclo for para comparar las opciones elegidas por los jugadores. Cuenta cuántas veces se eligió la marca "Stiga" frente a otras marcas usando variables acumuladoras.

- Salida: El total de pelotas de la opción preferida acumuladas y un mensaje con el resultado.

## Reglas identificadas

1. Si la marca evaluada en la lista es exactamente igual a "Stiga", el acumulador de esta opción aumenta en 1.

2. Si se ingresa una marca distinta, se suma al acumulador de "Otras marcas".

3. Si la lista de opciones está vacía, el sistema debe arrojar un estado de error indicando que no hay datos para comparar.

## Pruebas

### Caso normal

Entrada: opciones: ["Stiga", "Butterfly", "Stiga", "Nittaku", "Stiga"]
Resultado esperado: votosStiga: 3, mensaje: "La opcion Stiga es la preferida con 3 elecciones."

### Caso borde

Entrada: opciones: []
Resultado esperado: votosStiga: 0, mensaje: "Error: No hay opciones guardadas para realizar una comparacion."

## Explicacion final

El programa procesa las elecciones de equipamiento de pingpong. Al pasar la lista por un ciclo, compara cada opción con nuestro objetivo que en este caso es Stiga. En el caso borde, detecta de inmediato que la lista no tiene elementos, evitando que los acumuladores procesen datos inexistentes.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
