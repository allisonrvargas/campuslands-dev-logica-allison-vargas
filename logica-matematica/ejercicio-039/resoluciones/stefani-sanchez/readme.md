# Ejercicio 039 - Validaciones Numéricas

## Cómo pensé el problema

Primero identifiqué las entradas: una lista de participantes, un bono y una penalización. Luego calculé el promedio de los valores, apliqué las operaciones correspondientes y clasifiqué el resultado según el puntaje obtenido.

## Entradas

- Lista de participantes.
- Bono.
- Penalización.

## Salidas

- Promedio.
- Puntaje final.
- Clasificación.
- Explicación del resultado.

## Reglas aplicadas

1. Sumar todos los valores de la lista.
2. Calcular el promedio.
3. Sumar el bono.
4. Restar la penalización.
5. Clasificar el resultado:
   - Mayor o igual a 25: Competitivo.
   - Entre 15 y 24.99: Intermedio.
   - Menor a 15: Inicial.
6. Si la lista está vacía, mostrar un mensaje indicando que no hay participantes.

## Cómo ejecutar

```bash
node stefani-sanchez.js
```

## Casos probados

### Caso normal

Entrada:

- Participantes: [12, 18, 25, 30]
- Bono: 8
- Penalización: 3

Resultado esperado:

- Promedio: 21.25
- Puntaje final: 26.25
- Clasificación: Competitivo

### Caso borde

Entrada:

- Lista vacía.

Resultado esperado:

```
No hay participantes para evaluar.
```

## Explicación

La solución utiliza ciclos para sumar los valores, un acumulador para obtener el total, funciones para organizar el código y condicionales para clasificar el puntaje final.