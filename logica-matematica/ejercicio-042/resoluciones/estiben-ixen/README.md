# Resolución Ejercicio: Ranking de Fútbol Sala

## Como pensaste el problema
Se estructuró la solución priorizando la obtención de los puntos totales como métrica primaria y el porcentaje de victorias como métrica de efectividad. La diferencia de goles se utiliza como una variable de control para determinar la robustez del equipo en el campo.

## Reglas aplicadas
1. **Puntaje:** Sistema estándar (3 pts victoria, 1 pt empate, 0 pt derrota).
2. **Proporción de efectividad:** Se calcula como (victorias / total partidos) * 100.
3. **Clasificación:**
   - **Élite:** >= 20 puntos Y >= 50% de victorias.
   - **Competitivo:** >= 10 puntos.
   - **En formación:** < 10 puntos.

## Como ejecutar o revisar tu solucion
1. Asegúrate de tener Node.js instalado.
2. Ejecuta el archivo: `node shen.js`.

## Casos
- **Caso normal:** Un equipo con buen balance de victorias, demostrando un nivel "Élite".
- **Caso borde:** Un equipo con mayoría de derrotas, validando la clasificación en "En formación" y el manejo de divisiones por cero en partidos.