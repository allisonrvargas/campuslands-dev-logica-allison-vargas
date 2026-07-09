# Plantilla de solucion

## Analisis

- Entrada: Un arreglo de objetos con las estadísticas básicas (`nombre`, `ganados`, `empatados`, `perdidos`).
- Proceso: Calcular el porcentaje de efectividad usando la fórmula: ((puntos obtenidos) / (puntos totales posibles)) * 100.
- Salida: Un nuevo arreglo con el nombre del equipo y su porcentaje de efectividad calculado.

## Reglas identificadas

1. Puntos por victoria: 3 puntos.
2. Puntos por empate: 1 punto.
3. Puntos por derrota: 0 puntos.
4. Efectividad: Relación entre los puntos logrados y el máximo posible (partidos totales * 3).

## Pruebas

### Caso normal

Entrada:
{ nombre: "Equipo A", ganados: 8, empatados: 1, perdidos: 1 } (Total 10 partidos)

Resultado esperado:
85.00% (25 puntos obtenidos / 30 posibles)

### Caso borde

Entrada:
{ nombre: "Equipo C", ganados: 0, empatados: 0, perdidos: 0 }

Resultado esperado:
0.00% (Prevención de división por cero)

## Explicacion final

La solución utiliza el método `.map()` para transformar los datos crudos en un reporte de rendimiento. Se normaliza el cálculo asegurando que la división siempre tenga un denominador válido (evitando errores en caso de equipos sin partidos jugados) y se utiliza `.toFixed(2)` para formatear el resultado visualmente.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.