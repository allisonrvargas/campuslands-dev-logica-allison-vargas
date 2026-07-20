## Analisis

- Entrada: Un arreglo con puntuaciones de películas y una diferencia constante esperada.
- Proceso: Calcular la resta entre elementos consecutivos del arreglo para verificar si siempre coinciden con la diferencia esperada.
- Salida: Un mensaje indicando si se cumple el patrón de crecimiento.

## Reglas identificadas

1. El patrón se confirma si la resta entre cualquier elemento y su anterior es siempre igual a la 'diferenciaEsperada'.
2. Si en cualquier punto la diferencia es distinta, el patrón se considera roto.

## Pruebas

### Caso normal

Entrada:
puntuaciones: [10, 20, 30, 40]
diferenciaEsperada: 10

Resultado esperado:
resultado: patron confirmado
mensaje: las puntuaciones crecen de forma constante.

### Caso borde

Entrada:
puntuaciones: [10, 20, 50, 60]
diferenciaEsperada: 10

Resultado esperado:
resultado: patron roto
mensaje: la diferencia entre puntuaciones no es constante.

## Explicacion final

Para resolver este problema, utilicé un ciclo 'for' que resta cada valor del siguiente en la lista. Si esa resta no es igual a la constante definida, cambio el valor de 'cumplePatron' a falso. Al terminar el recorrido, un condicional muestra el resultado final basado en esa bandera lógica.