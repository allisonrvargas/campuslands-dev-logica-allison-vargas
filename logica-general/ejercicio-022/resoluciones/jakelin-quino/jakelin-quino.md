## Analisis

- Entrada: Dos números que representan los goles a favor y goles en contra de un equipo de fútbol sala.
- Proceso: Primero validar que los datos no sean negativos. Luego, comparar ambos valores para determinar si el equipo es ganador o perdedor.
- Salida: Un estado ("invalido", "ganador", "perdedor") y un mensaje descriptivo.

## Reglas identificadas

1. Si cualquier entrada es menor a 0, el dato es "invalido".
2. Si los goles a favor son mayores a los en contra, el equipo es "ganador".
3. En cualquier otro caso, el equipo es "perdedor".

## Pruebas

### Caso normal

Entrada:
golesFavor: 15
golesContra: 10

Resultado esperado:
estado: ganador
mensaje: El equipo tiene diferencia positiva.

### Caso borde

Entrada:
golesFavor: -1
golesContra: 5

Resultado esperado:
estado: invalido
mensaje: Los goles no pueden ser negativos.

## Explicacion final

Primero filtro los datos incorrectos (números negativos) usando un 'if'. Después, utilizo un 'else if' para comparar la cantidad de goles. Esto asegura que solo procesemos datos reales y que la clasificación del equipo se haga correctamente según la diferencia de goles.