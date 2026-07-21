# Toma de Decisiones - Torneo de Esports

## Autor

Sergio Ajú

## Descripción
Algoritmo para validar la elegibilidad de jugadores en un torneo competitivo.

## Reglas Aplicadas
1. Nivel mínimo requerido: 10.
2. Latencia máxima permitida: < 100ms.
3. Cupos mínimos: 1.

## Cómo revisar
Ejecuta el archivo `nombre-apellido.js` usando Node.js. El script contiene pruebas integradas que validan los casos normales y los casos de error.

## Casos Probados
- **Normal:** Jugador con nivel 15 y latencia 45.
- **Borde:** Jugador sin nivel y sin cupos (detecta múltiples fallos).