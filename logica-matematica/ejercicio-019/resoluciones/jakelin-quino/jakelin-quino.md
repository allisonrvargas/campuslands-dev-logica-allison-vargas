## Analisis

- Entrada: Un arreglo con los números de valencia de los átomos en una molécula.
- Proceso: Sumar los valores del arreglo y verificar si el resultado es igual a cero (requisito de estabilidad química).
- Salida: Un mensaje indicando si la fórmula es válida o inválida.

## Reglas identificadas

1. Una fórmula química es neutra si la suma algebraica de las valencias de sus elementos es exactamente cero.
2. Si la suma es distinta de cero, la fórmula no es estable (inválida).

## Pruebas

### Caso normal

Entrada:
valencias: [+1, -1] (ej. NaCl)

Resultado esperado:
resultado: formula valida (neutra)

### Caso borde

Entrada:
valencias: [+2, -1] (ej. CaF)

Resultado esperado:
resultado: formula invalida (desbalanceada)

## Explicacion final

Para resolver este reto, implementé un acumulador que recorre el arreglo de valencias y suma sus valores. El uso de un condicional `if` es clave para comparar el resultado contra cero. Esta es una forma simplificada de modelar cómo la química exige equilibrio en la estructura molecular.