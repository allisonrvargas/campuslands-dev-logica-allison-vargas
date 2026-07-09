## Analisis

- Entrada: Un arreglo de números (`puntuaciones`) que representan la valoración de una película en distintas plataformas o críticos.
- Proceso: Comparar los elementos adyacentes para determinar si existe una tendencia uniforme (creciente o decreciente) o si los datos fluctúan.
- Salida: Un mensaje descriptivo del patrón de recepción.

## Reglas identificadas

1. Creciente: Cada valor es igual o mayor al anterior en toda la secuencia.
2. Decreciente: Cada valor es igual o menor al anterior en toda la secuencia.
3. Errático: Si no se cumple ninguna de las anteriores, el patrón es inestable.

## Pruebas

### Caso normal

Entrada:
[6, 7, 8, 9]

Resultado esperado:
"Patrón creciente: éxito constante"

### Caso borde

Entrada:
[5, 5, 5]

Resultado esperado:
"Patrón creciente: éxito constante" (La regla técnica considera que mantener el valor no rompe la tendencia creciente/decreciente)

## Explicacion final

La solución utiliza dos banderas lógicas (`creciente` y `decreciente`). Al iterar por el arreglo, estas banderas se desactivan si se detecta una ruptura en la tendencia. Este enfoque es altamente eficiente ya que permite clasificar la serie de datos en una sola pasada (O(n)).

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.