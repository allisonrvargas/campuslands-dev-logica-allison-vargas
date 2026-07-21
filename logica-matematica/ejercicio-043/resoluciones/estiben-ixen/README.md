# Resolución Ejercicio: Análisis Estadístico en Esports

## Como pensaste el problema
Se abordó el problema comparando la media (afectada por valores atípicos) y la mediana (resistente a valores atípicos). Esta comparación permite detectar si un jugador es "estable" o si su rendimiento depende de partidas aisladas de muy alto o bajo nivel.

## Reglas aplicadas
1. **Promedio:** Sumatoria total dividida por el número de partidas.
2. **Mediana:** Elemento central de la lista ordenada; útil para identificar la tendencia real del jugador.
3. **Clasificación:**
   - Si `Promedio < Mediana * 0.8`: El jugador tiene partidas muy malas que arrastran su promedio abajo.
   - Si `Promedio > Mediana * 1.2`: El jugador tuvo partidas "de suerte" o muy buenas que inflan su promedio.
   - Resto: Jugador estable.

## Como ejecutar o revisar tu solucion
1. Asegúrate de tener Node.js instalado.
2. Ejecuta el archivo: `node shen.js`.

## Casos
- **Caso normal:** Datos con poca dispersión, resultando en "Jugador Estable".
- **Caso borde:** Lista con un valor extremadamente alto (ej. 25 kills), validando que la lógica identifique al jugador como "Estrella".