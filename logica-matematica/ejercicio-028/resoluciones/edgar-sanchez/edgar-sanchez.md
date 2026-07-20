# Plantilla de solucion

## Analisis
El problema se diseñó para evaluar y filtrar patrones de puntuación en críticas de películas de ciencia ficción en una plataforma de reseñas cinefilas. Para evitar que las valoraciones sean manipuladas por cuentas automatizadas (bots), el sistema analiza un historial de puntuaciones consecutivas dejadas por un mismo usuario, buscando patrones sospechosos (como calificaciones idénticas repetidas de forma masiva) y calculando una nota de consistencia ponderada para la película.

- Entrada: Una lista de números enteros que representan las calificaciones del usuario (escala de 1 a 10) y un indicador de perfil verificado (booleano).
- Proceso: 
  1. Validar que la lista contenga un número mínimo de reseñas para realizar el análisis estadístico.
  2. Recorrer la lista para detectar si existen más de 3 puntuaciones consecutivas idénticas (patrón de spam).
  3. Calcular el promedio aritmético. Si el usuario está verificado, se le concede un voto de confianza y la alerta de patrón sospechoso se mitiga si el promedio es alto.
- Salida: Un objeto que contiene el promedio de las puntuaciones y el estado final de la reseña ("Válida", "Sospechosa" o "Insuficiente").

## Reglas identificadas
1. Detección de Patrón Plano (Spam): Si se encuentran 4 o más calificaciones idénticas de forma consecutiva ($puntuacion_{i} == puntuacion_{i+1} == puntuacion_{i+2} == puntuacion_{i+3}$), la reseña se cataloga inicialmente como `"Sospechosa"`.
2. Excepción por Cuenta Verificada: Si la cuenta está verificada (`esVerificado` es `true`) y el promedio general de sus puntuaciones es estrictamente mayor o igual a 8.0, la etiqueta `"Sospechosa"` se anula, regresando a estado `"Válida"`.
3. Umbral de Muestra Mínima: Si el historial tiene menos de 4 calificaciones, no se puede calcular un patrón de consistencia válido, devolviendo automáticamente el estado `"Insuficiente"`.

## Pruebas

### Caso normal (Patrón repetitivo sospechoso)
Entrada: puntuaciones = [9, 9, 9, 9, 8, 7], esVerificado = false
Resultado esperado: { "promedioPuntuacion": 8.5, "estadoCritica": "Sospechosa" }

### Caso borde (Verificado mitiga la sospecha)
Entrada: puntuaciones = [9, 9, 9, 9], esVerificado = true
Resultado esperado: { "promedioPuntuacion": 9.0, "estadoCritica": "Válida" }

### Caso muestra insuficiente
Entrada: puntuaciones = [10, 9], esVerificado = false
Resultado esperado: { "promedioPuntuacion": 9.5, "estadoCritica": "Insuficiente" }

## Explicacion final
La solución funciona porque utiliza una ventana condicional de escaneo continuo para buscar anomalías en las secuencias de datos numéricos y aplica un factor jerárquico basado en la reputación de la cuenta para validar el resultado.