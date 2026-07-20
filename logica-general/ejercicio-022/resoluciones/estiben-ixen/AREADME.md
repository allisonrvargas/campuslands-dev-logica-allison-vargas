## Analisis

- Entrada: Un arreglo de objetos, donde cada objeto representa un equipo con las propiedades `nombre`, `puntos`, `golesFavor` y `golesContra`.
- Proceso: Ordenar los objetos mediante el método de ordenamiento estándar, aplicando los tres criterios de desempate jerárquicos.
- Salida: Un nuevo arreglo con los objetos ordenados de mayor a menor según el ranking definido.

## Reglas identificadas

1. Prioridad 1: Ordenar descendentemente por la cantidad de puntos.
2. Prioridad 2: En caso de empate en puntos, ordenar descendentemente por diferencia de goles (goles a favor - goles en contra).
3. Prioridad 3: En caso de empate en diferencia de goles, ordenar descendentemente por la cantidad de goles a favor.

## Pruebas

### Caso normal

Entrada:
[{ nombre: "Tigres", puntos: 12, golesFavor: 8, golesContra: 2 }, { nombre: "Leones", puntos: 12, golesFavor: 10, golesContra: 3 }]

Resultado esperado:
[{ nombre: "Leones", puntos: 12, golesFavor: 10, golesContra: 3 }, { nombre: "Tigres", puntos: 12, golesFavor: 8, golesContra: 2 }]

### Caso borde

Entrada:
[{ nombre: "A", puntos: 6, golesFavor: 3, golesContra: 1 }, { nombre: "B", puntos: 6, golesFavor: 3, golesContra: 1 }]

Resultado esperado:
Se mantiene el orden relativo original o ambos ocupan la misma posición al ser estadísticamente idénticos.

## Explicacion final

La solución funciona utilizando la función de comparación del método `.sort()` de JavaScript. Al evaluar las condiciones en una estructura de cascada (if/else), el algoritmo garantiza que si una regla no permite decidir el orden (porque los valores son iguales), automáticamente procede a evaluar la siguiente regla de desempate hasta completar la jerarquía.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar. En este caso, la diferencia de goles se calcula dinámicamente para cada comparacion, lo que evita errores de actualización de datos.