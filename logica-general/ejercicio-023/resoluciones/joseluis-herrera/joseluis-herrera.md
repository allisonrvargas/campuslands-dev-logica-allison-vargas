# Ejercicio 23
# Explicación
En esta segunda versión, se resuelve el problema aislando el cálculo de las métricas en funciones flecha independientes y reutilizables. Esto permite mantener el bloque principal libre de bucles manuales y utilizar una estructura de control limpia con switch(true) para determinar la categoría del equipo en el torneo basándose en banderas lógicas precalculadas.