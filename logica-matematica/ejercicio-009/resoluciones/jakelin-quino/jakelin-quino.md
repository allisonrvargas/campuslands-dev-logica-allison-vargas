## Analisis

- Entrada: Un arreglo con los tiempos (en minutos) donde ocurren los sustos y un número que define el intervalo esperado.
- Proceso: Aplicar el operador módulo (%) para verificar si cada tiempo es divisible exactamente por el intervalo.
- Salida: Un mensaje que confirma si todos los sustos siguen el patrón o si hay irregularidades.

## Reglas identificadas

1. Un susto sigue el patrón si el residuo de dividir su tiempo por el intervalo es cero.
2. Si cualquier susto tiene un residuo diferente de cero, el patrón se considera roto.

## Pruebas

### Caso normal

Entrada:
tiemposSustos: [10, 20, 30, 50]
intervaloMaldito: 10

Resultado esperado:
resultado: patron maldito confirmado
mensaje: todos los sustos ocurren en intervalos precisos.

### Caso borde

Entrada:
tiemposSustos: [10, 22, 30]
intervaloMaldito: 10

Resultado esperado:
resultado: patron roto
mensaje: hay sustos que no siguen el intervalo esperado.

## Explicacion final

Utilicé el operador de módulo (%) dentro de un ciclo. Si el módulo de un tiempo respecto al intervalo es distinto de cero, significa que el susto no ocurrió en el momento "maldito" esperado. Conté estas irregularidades y, si el contador es mayor a cero al final, informo que el patrón se rompió.
