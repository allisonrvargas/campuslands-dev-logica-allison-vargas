# Plantilla de solucion

## Analisis

- **Entrada:** Un objeto (`perfilJugador`) que almacena las estadísticas del usuario: juegos ganados (`partidasGanadas`), juegos jugados (`partidasTotales`) y su historial de conducta (`cuentaSancionada`).
- **Proceso:** Validar los datos de entrada. Primero, descartar jugadores con penalizaciones. Si están limpios, calcular qué porcentaje del total de sus juegos han ganado para ubicar su nivel competitivo.
- **Salida:** Un objeto con el veredicto de la liga ("Clasificación exitosa", "Descalificado", etc.), el rango competitivo obtenido y un mensaje detallado explicando la decisión.

## Reglas identificadas

1. **Filtro de Conducta:** Si la cuenta está sancionada por mal comportamiento, se le niega cualquier rango y se le descalifica de inmediato, sin importar cuántos juegos haya ganado.
2. **Control de Actividad:** Si el total de partidas es cero o no es un número válido, el sistema le asigna el estado de "Sin clasificar" para evitar errores lógicos.
3. **Escala de Rangos:** - **Diamante:** Tasa de victorias igual o mayor al 75%.
   - **Oro:** Tasa de victorias entre el 50% y el 74.9%.
   - **Plata:** Tasa de victorias menor al 50%.

## Pruebas

### Caso normal

Entrada:
```javascript
const perfilJugador = {
  partidasGanadas: 80,
  partidasTotales: 100,
  cuentaSancionada: false
};
Resultado esperado:
JSON
{
  "estado": "Clasificación exitosa",
  "rango": "Diamante",
  "motivo": "El jugador tiene un rendimiento del 80.0% tras ganar 80 de 100 juegos."
}
Caso borde
Entrada:

JavaScript
const perfilJugador = {
  partidasGanadas: 90,
  partidasTotales: 100,
  cuentaSancionada: true
};
Resultado esperado
JSON
{
  "estado": "Descalificado",
  "rango": "Ninguno (Baneado)",
  "motivo": "La cuenta tiene reportes activos por mal comportamiento en la comunidad."
}
Explicacion final
La solución funciona muy bien porque acomoda a los jugadores en sus ligas de forma justa y ordenada. Al poner el filtro de comportamiento al principio, el programa expulsa a los usuarios tramposos o problemáticos antes de perder tiempo haciendo matemáticas. Para los jugadores limpios, el código calcula su nivel real de juego dividiendo las victorias entre las partidas totales, asegurando que cada quien reciba su rango de Diamante, Oro o Plata según sus verdaderos resultados en la temporada.