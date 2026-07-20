## Analisis

- Entrada: Número total de partidos jugados y número de partidos ganados.
- Proceso: Calcular la proporción (ganados/jugados), convertirla a porcentaje y aplicar condicionales para clasificar al equipo.
- Salida: Porcentaje de efectividad y categoría del equipo.

## Reglas identificadas

1. Efectividad = (Ganados / Jugados) * 100.
2. Si efectividad >= 75%, el equipo es "élite".
3. Si efectividad es >= 50% y < 75%, el equipo es "competitivo".
4. Si es menor a 50%, el equipo está "en desarrollo".

## Pruebas

### Caso normal

Entrada:
partidosJugados: 20
partidosGanados: 12

Resultado esperado:
efectividad_equipo: 60%
categoria: competitivo

### Caso borde

Entrada:
partidosJugados: 10
partidosGanados: 10

Resultado esperado:
efectividad_equipo: 100%
categoria: élite

## Explicacion final

Para resolver este problema, establecí una jerarquía de condiciones (if-else if-else). Es vital calcular primero el porcentaje de efectividad para luego evaluar en qué rango cae dicho valor.