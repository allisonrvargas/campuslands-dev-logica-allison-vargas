# Resolución Ejercicio: Ranking de Arquitectura 3D

## Como pensaste el problema
Se abordó mediante un flujo secuencial: primero la obtención de datos base, seguida de la aplicación de modificadores condicionales (complejidad y optimización) y, finalmente, la categorización del proyecto basada en rangos definidos.

## Reglas aplicadas
1. **Suma:** Se totalizan las métricas proporcionadas.
2. **Escala:** Si las texturas > 50, se multiplica el puntaje por el `factorEscala`.
3. **Penalización:** Si el tiempo de render > 120 min, se aplica una reducción del 10%.
4. **Ranking:** Basado en umbrales de 50 y 100 puntos.

## Como ejecutar o revisar tu solucion
1. Asegúrate de tener instalado Node.js.
2. Ejecuta el archivo en tu terminal: `node shen.js`.

## Que casos probaste
- **Caso normal:** Proyecto sin aplicar multiplicadores de complejidad, validando el cálculo aritmético simple.
- **Caso borde:** Proyecto con alta complejidad (texturas > 50) y tiempo de render excedido (> 120 min), validando que ambos ajustes se apliquen correctamente.