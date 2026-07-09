## Analisis

- Entrada: Un arreglo con valores numéricos de participantes, un bono y una penalización.
- Proceso: Sumar todos los participantes, sumar el bono y restar la penalización. Luego, evaluar si el resultado llega a 50.
- Salida: El puntaje final calculado y la clasificación resultante.

## Reglas identificadas

1. El puntaje se calcula sumando todos los elementos de la lista, agregando el bono y restando la penalización.
2. Si el puntaje es 50 o más, es "profesional".
3. Si el puntaje es menor a 50, es "competitivo".

## Pruebas

### Caso normal

Entrada:
participantes: [12, 18, 25, 30]
bono: 8
penalizacion: 3

Resultado esperado:
puntaje_final: 90
clasificacion: profesional

### Caso borde

Entrada:
participantes: [10, 10]
bono: 0
penalizacion: 5

Resultado esperado:
puntaje_final: 15
clasificacion: competitivo

## Explicacion final

Para resolver este ejercicio, primero sumé todos los números de la lista usando un ciclo simple. Después, apliqué las operaciones matemáticas básicas para el bono y la penalización. Por último, utilicé una estructura 'if' para comparar el resultado contra 50 y asignar la categoría correspondiente.
