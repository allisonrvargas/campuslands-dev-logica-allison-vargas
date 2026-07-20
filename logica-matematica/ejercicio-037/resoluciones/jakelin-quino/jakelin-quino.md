## Análisis
- **Entrada**: Un arreglo con los puntajes de los jueces.
- **Proceso**: Sumo todos los valores y los divido entre la cantidad de elementos para obtener el promedio. Luego, uso una condición para asignar una categoría.
- **Salida**: El promedio final y su clasificación.

## Reglas aplicadas
- Promedio = $\frac{\sum Puntos}{Total Jueces}$.
- Si promedio > 85, categoría "Excelente", de lo contrario "Estándar".

## Pruebas
- **Caso Normal**: [85, 90, 78, 92] -> Promedio 86.25 -> "Excelente".
- **Caso Borde**: [70, 70, 70, 70] -> Promedio 70 -> "Estándar".

## Explicación
Para obtener el ranking, primero acumulé todos los puntajes en una variable y después dividí por la cantidad de jueces. La condición `if` me permite clasificar automáticamente el desempeño del proyecto.