## Analisis

- Entrada: Un arreglo con los puntajes de los proyectos de arquitectura 3D.
- Proceso: Identificar el valor máximo (lider) y calcular el promedio aritmético de todos los puntajes. Clasificar según el promedio.
- Salida: El puntaje del líder, el promedio del grupo y el estado del ranking.

## Reglas identificadas

1. El líder es el valor máximo del conjunto de datos.
2. El promedio es la suma de los puntajes dividida entre el número de proyectos.
3. Si el promedio es >= 90, la categoría es "excelencia creativa"; de lo contrario, "desempeño estandar".

## Pruebas

### Caso normal

Entrada:
puntajes: [85, 92, 78, 95, 88]

Resultado esperado:
puntaje_lider: 95
promedio_general: 87.60
estado: desempeño estandar

### Caso borde

Entrada:
puntajes: [90, 95, 92]

Resultado esperado:
puntaje_lider: 95
promedio_general: 92.33
estado: excelencia creativa

## Explicacion final

Utilicé `Math.max` para identificar rápidamente al líder del ranking. Para el promedio, empleé el método `reduce` sobre el arreglo, lo que permite acumular la suma de forma eficiente antes de dividir por la cantidad de elementos. Finalmente, una estructura condicional clasifica el nivel del grupo según el promedio obtenido.