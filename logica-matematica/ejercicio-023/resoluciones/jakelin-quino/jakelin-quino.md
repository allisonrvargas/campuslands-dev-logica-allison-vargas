## Analisis

- Entrada: Un arreglo con los puntajes de los jugadores en el torneo.
- Proceso: 
    - Calcular el promedio (media aritmética).
    - Ordenar el arreglo y encontrar la mediana (valor central).
    - Comparar ambos para clasificar el tipo de rendimiento.
- Salida: Promedio, mediana y clasificación del rendimiento.

## Reglas identificadas

1. Promedio = Suma total / número de elementos.
2. Mediana = Valor central después de ordenar (si la lista es par, promedio de los dos centrales).
3. Si la mediana > promedio, el rendimiento es "consistente".
4. Si el promedio >= mediana, el rendimiento es "variable".

## Pruebas

### Caso normal

Entrada:
puntajes: [150, 200, 300, 100, 450]

Resultado esperado:
promedio: 240
mediana: 200
clasificacion: rendimiento variable

### Caso borde

Entrada:
puntajes: [100, 100, 100]

Resultado esperado:
promedio: 100
mediana: 100
clasificacion: rendimiento variable (igualdad)

## Explicacion final

Primero ordené el arreglo de números, lo cual es obligatorio para encontrar la mediana. Utilicé el operador de residuo (`%`) para manejar correctamente tanto listas de tamaño impar como par al buscar el punto medio. La comparación entre el promedio y la mediana nos permite identificar si hay valores extremos que están afectando el rendimiento del equipo.
