## Analisis

- Entrada: Un arreglo `arsenal` con los nombres de las técnicas disponibles y un número `longitud` que define cuántos golpes tendrá el combo.
- Proceso: Calcular permutaciones, ya que en el kickboxing el orden de ejecución es determinante para la eficacia de la combinación.
- Salida: Un número entero que representa el total de combinaciones únicas posibles.

## Reglas identificadas

1. Selección sin repetición: Asumimos que cada golpe en el combo es distinto (un golpe no se repite dentro de la misma secuencia de 3).
2. Importancia del orden: El combo "Jab-Cross-Hook" es distinto a "Hook-Cross-Jab".
3. Límite físico: No se pueden realizar más golpes en un combo que el total de técnicas disponibles en el arsenal.

## Pruebas

### Caso normal

Entrada:
arsenal: ["jab", "cross", "hook"], longitud: 3

Resultado esperado:
6 (3 * 2 * 1)

### Caso borde

Entrada:
arsenal: ["jab", "cross"], longitud: 3

Resultado esperado:
0 (Es imposible crear un combo de 3 golpes con solo 2 técnicas disponibles)

## Explicacion final

La solución utiliza la fórmula de permutaciones $P(n, k) = \frac{n!}{(n-k)!}$. Esto permite escalar el sistema: si el entrenador añade una nueva técnica al arsenal, el algoritmo recalcula automáticamente todas las posibilidades sin necesidad de cambios manuales.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.