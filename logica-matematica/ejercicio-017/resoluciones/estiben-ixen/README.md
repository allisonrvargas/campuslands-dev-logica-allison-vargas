## Analisis

- Entrada: Un arreglo de objetos con `nombre`, `calidadDetalle` (0-100) y `velocidadEntrega` (0-100).
- Proceso: Aplicación de un sistema de puntuación ponderada y clasificación categórica.
- Salida: Arreglo de proyectos ordenado de mayor a menor puntuación con su respectiva categoría.

## Reglas identificadas

1. Ponderación: El detalle técnico tiene mayor peso (70%) que la velocidad (30%).
2. Categorización:
   - >= 90: Élite.
   - 70-89: Profesional.
   - < 70: Estándar.
3. Ordenamiento: El ranking debe presentarse de forma descendente (del mejor al peor).



## Pruebas

### Caso normal

Entrada:
{ nombre: "A", calidadDetalle: 100, velocidadEntrega: 100 }

Resultado esperado:
Score: 100, Categoría: Élite

### Caso borde

Entrada:
{ nombre: "B", calidadDetalle: 50, velocidadEntrega: 50 }

Resultado esperado:
Score: 50, Categoría: Estándar

## Explicacion final

La solución utiliza una media ponderada para equilibrar dos métricas distintas en la arquitectura 3D: la complejidad técnica frente a la capacidad de entrega. El uso de `.map()` para calcular y `.sort()` para organizar permite que el ranking se actualice dinámicamente cada vez que se añadan nuevos proyectos al catálogo.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.