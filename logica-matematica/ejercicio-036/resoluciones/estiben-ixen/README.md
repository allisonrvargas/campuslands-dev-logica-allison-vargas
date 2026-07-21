# Resolución Ejercicio 036 - Animación 3D

## Pensamiento lógico
Para resolver este problema, dividí el proceso en tres capas: acumulación de datos, aplicación de reglas de negocio (bonos y penalizaciones) y categorización final. Utilicé métodos funcionales de JavaScript como `.reduce()` para el cálculo y `Math.max()` para identificar el caso de penalización.

## Reglas aplicadas
- El puntaje base es la sumatoria de la lista.
- Si el equipo tiene más de 3 integrantes, se otorga un bono.
- Si algún valor es superior a 25, se aplica una penalización por complejidad.
- Se clasifica el resultado en tres rangos según el valor final obtenido.

## Casos de prueba
1. **Normal:** [12, 18, 25, 30], bono 8, penalización 3 -> Resultado 27 (Competitivo).
2. **Caso borde:** [5, 5], bono 8, penalización 3 -> Resultado 10 (En desarrollo). No recibe bono al tener solo 2 integrantes.

