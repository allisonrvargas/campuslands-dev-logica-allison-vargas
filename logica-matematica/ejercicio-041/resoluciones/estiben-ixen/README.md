# Resolución Ejercicio: MMR en Videojuegos Competitivos

## Como pensaste el problema
Se abordó mediante una estructura de "ganancias y pérdidas escalables". El MMR no es solo un valor absoluto, sino un indicador que reacciona a variables externas como la dificultad del rival y el desempeño personal, asegurando que el sistema sea justo (quien gana a alguien difícil, sube más rápido).

## Reglas aplicadas
1. **Resultado base:** Victoria (+20) o Derrota (-20).
2. **Dificultad:** El cambio se multiplica por el `nivelOponente` (1, 2 o 3).
3. **Desempeño:** Si el jugador obtiene > 80 de `performanceScore`, recibe un 50% extra de puntos (o penalización reducida).
4. **Validación:** Se utiliza `Math.max(0, ...)` para evitar que el MMR descienda a valores negativos, protegiendo la integridad del sistema.

## Como ejecutar o revisar tu solucion
1. Asegúrate de tener instalado Node.js.
2. Ejecuta el archivo en tu terminal: `shen.js`.

## Casos
- **Caso normal:** Victoria contra un oponente de nivel medio con buen desempeño.
- **Caso borde:** Jugador con MMR bajo que pierde una partida difícil, validando que el sistema mantenga el MMR en 0.
