# Plantilla de solucion

## Analisis

* **Entrada**: Objeto `equipo` con las propiedades `nombre`, `victorias`, `empates`, `derrotas` y `fairPlayPoints`.
* **Proceso**: Validación de umbral mínimo de victorias y cálculo aritmético de puntos acumulados (3 por victoria, 1 por empate).
* **Salida**: Objeto con `estado` (Avanza/Eliminado), `puntajeTotal` y un mensaje de `motivo` detallado.

## Reglas identificadas

1. Se requiere un mínimo de 2 victorias para no ser eliminado.
2. El puntaje se calcula como la suma de victorias multiplicadas por 3 y empates multiplicados por 1.
3. El resultado debe indicar si el equipo avanza o es eliminado junto con el resumen de puntos.

## Pruebas

### Caso normal

* **Entrada**: `{ nombre: "Dragones", victorias: 3, empates: 1, derrotas: 0, fairPlayPoints: 10 }`
* **Resultado esperado**: `{ estado: "Avanza", puntajeTotal: 10, motivo: "Clasificado con 10 puntos y 10 puntos de fair play." }`

### Caso borde

* **Entrada**: `{ nombre: "Noobs", victorias: 1, empates: 5, derrotas: 0, fairPlayPoints: 5 }`
* **Resultado esperado**: `{ estado: "Eliminado", motivo: "No cumple el requisito mínimo de 2 victorias." }`

## Explicacion final

La solución funciona mediante una validación condicional inicial que filtra los equipos según su rendimiento competitivo, permitiendo que solo aquellos que cumplen los requisitos procedan al cálculo de su puntaje final de manera eficiente.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar:

* **Condición de Clasificación**: `equipo.victorias < 2`.
* **Fórmula de Puntaje**: `(equipo.victorias * 3) + (equipo.empates * 1)`.