Aquí tienes la plantilla de solución para el sistema de ranking de jugadores:

# Plantilla de solucion

## Analisis

* **Entrada**: `victorias` (número), `derrotas` (número), `factorBono` (valor multiplicador de victorias) y `penalizacion` (valor multiplicador de derrotas).
* **Proceso**: Cálculo aritmético aplicando una ponderación a los resultados, seguido de una validación de límite inferior (piso en 0) y una clasificación basada en un umbral de puntaje.
* **Salida**: Objeto con `puntaje_final`, `clasificacion` y una `explicacion` del proceso.

## Reglas identificadas

1. El puntaje se calcula como: `(victorias * factorBono) - (derrotas * penalizacion)`.
2. Si el puntaje resultante es menor a 0, se establece automáticamente en 0.
3. La clasificación es "Élite" si el puntaje es mayor a 50; de lo contrario, es "Competitivo".

## Pruebas

### Caso normal

* **Entrada**: `victorias: 10, derrotas: 2, factorBono: 8, penalizacion: 3`
* **Resultado esperado**: `{ puntaje_final: 74, clasificacion: "Élite", ... }`

### Caso borde

* **Entrada**: `victorias: 1, derrotas: 5, factorBono: 8, penalizacion: 3`
* **Resultado esperado**: `{ puntaje_final: 0, clasificacion: "Competitivo", ... }`

## Explicacion final

La solución funciona mediante una secuencia aritmética lógica que normaliza los resultados del jugador, asegurando que el ranking sea siempre positivo y clasificable según los estándares definidos, evitando valores atípicos negativos.

## Sugerencia

Verifica cada operacion con calculos manuales antes de confiar en el codigo:

* **Ejemplo manual**: `(10 * 8) - (2 * 3) = 80 - 6 = 74`.