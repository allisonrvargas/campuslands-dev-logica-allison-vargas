# Patrones de Puntuación - Películas Sci-Fi

## Descripción
Herramienta de análisis estadístico para determinar la tendencia de recepción de películas de ciencia ficción a través del tiempo.

## Reglas Aplicadas
- **Detección de tendencias:** Compara elementos adyacentes para identificar secuencias monótonas (ascendentes o descendentes).
- **Cálculo estadístico:** Promedio simple de las puntuaciones recibidas.

## Cómo ejecutar
El archivo `nombre-apellido.js` contiene la lógica principal. La función `analizarPatron` debe recibir un arreglo de números.

## Casos Probados
- **Caso Éxito:** Secuencia [5, 7, 8, 9] detectada correctamente como tendencia positiva.
- **Caso Fracaso:** Secuencia [9, 5, 2] detectada correctamente como tendencia negativa.