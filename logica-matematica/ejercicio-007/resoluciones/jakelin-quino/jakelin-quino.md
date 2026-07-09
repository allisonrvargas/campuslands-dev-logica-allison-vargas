## Analisis

- Entrada: Un arreglo con las duraciones (en segundos) de varias canciones.
- Proceso: Comparar cada elemento con el siguiente para verificar si el valor aumenta constantemente.
- Salida: El resultado de la validación y un mensaje explicativo.

## Reglas identificadas

1. Una secuencia es correcta si cada canción es estrictamente más larga que la anterior.
2. Si cualquier canción es igual o menor a la anterior, la secuencia se invalida.

## Pruebas

### Caso normal

Entrada:
duraciones: [180, 210, 240, 270]

Resultado esperado:
resultado: secuencia correcta
mensaje: las canciones estan ordenadas de forma ascendente.

### Caso borde

Entrada:
duraciones: [180, 200, 190, 250]

Resultado esperado:
resultado: secuencia incorrecta
mensaje: las canciones no siguen un orden ascendente.

## Explicacion final

Para resolver este ejercicio, utilicé un ciclo 'for' que recorre el arreglo hasta el penúltimo elemento. Dentro del ciclo, comparo la posición actual con la siguiente. Si encuentro una que no sea mayor, activo una variable bandera que indica que la secuencia no es correcta. Es una forma directa de verificar progresiones numéricas.