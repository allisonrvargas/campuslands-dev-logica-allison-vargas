# Plantilla de solucion

## Analisis

- Entrada: Un objeto `criteriosJugador` (con `presupuesto` y `estilo` de juego) y un arreglo `opcionesRaquetas` que contiene objetos con las propiedades de cada raqueta (`modelo`, `precio`, `velocidad` y `control`).
- Proceso: Recorrer el catálogo de raquetas con un ciclo. Primero se descartan las que superan el presupuesto. Luego, se comparan las opciones restantes utilizando un acumulador de valor máximo para encontrar la raqueta que ofrezca el mejor rendimiento según el estilo del jugador (ofensivo o defensivo).
- Salida: Un objeto indicando la raqueta recomendada, su precio final y el motivo de la decisión de compra.

## Reglas identificadas

1. Regla de Presupuesto: Si el `precio` de una raqueta es mayor al `presupuesto` del jugador, la opción se descarta inmediatamente y el ciclo continúa con la siguiente.
2. Regla de Comparación por Estilo: Si el `estilo` del jugador es "ofensivo", se comparan las raquetas buscando el valor más alto en el atributo `velocidad`. Si el estilo es "defensivo", la comparación busca el valor más alto en el atributo `control`.

## Pruebas

### Caso normal

Entrada:
criteriosJugador: { presupuesto: 100, estilo: "ofensivo" }
opcionesRaquetas: [
  { modelo: "Basic Wood", precio: 30, velocidad: 5, control: 7 },
  { modelo: "Pro Carbon", precio: 95, velocidad: 9, control: 6 },
  { modelo: "Elite Spin", precio: 120, velocidad: 10, control: 5 }
]

Resultado esperado:
recomendacion: "Pro Carbon"
precio: 95
motivo: "Se compararon las opciones y 'Pro Carbon' es la mejor elección para el estilo 'ofensivo' respetando el presupuesto de $100."

### Caso borde

Entrada:
criteriosJugador: { presupuesto: 20, estilo: "defensivo" }
opcionesRaquetas: [
  { modelo: "Basic Wood", precio: 30, velocidad: 5, control: 7 }
]

Resultado esperado:
recomendacion: "Ninguna"
precio: 0
motivo: "Ninguna opción en el catálogo se ajusta al presupuesto de $20."

## Explicacion final

La solución funciona porque implementa el patrón lógico de "búsqueda del elemento máximo". Al usar un ciclo para iterar por todas las opciones y una variable de retención (`mejorPuntaje`), el algoritmo compara pares de datos consecutivamente, guardando en memoria solo la raqueta que ha superado los filtros de precio y que representa la mejor estadística para el estilo de pingpong seleccionado.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.