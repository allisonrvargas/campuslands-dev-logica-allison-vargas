## Analisis

- Entrada: Un arreglo con la duración en segundos de las canciones en la playlist.
- Proceso: Verificar si la diferencia entre cada canción consecutiva es la misma para toda la lista (secuencia aritmética).
- Salida: El tipo de secuencia identificada.

## Reglas identificadas

1. Una secuencia es aritmética si $a_{n} - a_{n-1} = constante$.
2. Si la diferencia cambia en cualquier punto, la secuencia no es aritmética.
3. Las listas con menos de 2 canciones se consideran trivialmente constantes.

## Pruebas

### Caso normal

Entrada:
duraciones: [180, 210, 240, 270]

Resultado esperado:
tipo_secuencia: aritmética constante (diferencia 30)

### Caso borde

Entrada:
duraciones: [180, 200, 240]

Resultado esperado:
tipo_secuencia: aleatoria/variable

## Explicacion final

Para resolver este reto, calculé la diferencia entre los dos primeros elementos y la utilicé como referencia (`diferencia`). Luego, mediante un ciclo `for` que comienza en el tercer elemento, comparé si la diferencia de los siguientes pares coincide con esta referencia. Si en algún momento la resta no coincide, la función devuelve `false` inmediatamente.