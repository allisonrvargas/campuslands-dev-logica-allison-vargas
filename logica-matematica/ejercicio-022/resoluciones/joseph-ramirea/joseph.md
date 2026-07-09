## Justificación de la Entrega - Logica matematica 022

Para resolver este vigesimosegundo ejercicio de logica matematica sobre porcentajes y proporciones en el ranking de futbol sala, mantuve el enfoque de desarrollo compacto, moderno y limpio utilizando JavaScript nativo.

### Como pense el problema y reglas aplicadas
En el analisis estadistico de una liga de futbol sala, evaluar los promedios de efectividad en goles y las proporciones de puntos acumulados nos permite posicionar a los clubes de forma justa. Implemente el metodo nativo `.reduce()` para calcular en una sola linea de codigo la sumatoria de las muestras del arreglo, dividiendo el total por su longitud para encontrar la media estadistica base de la plantilla.

Posteriormente, sume el bono por juego limpio o victorias consecutivas y reste la penalizacion por tarjetas amarillas/rojas acumuladas segun las reglas de negocio de la federacion. Para finalizar, aplique un `Math.round()` con el fin de blindar el calculo contra errores de punto flotante de java scrips, garantizando que la salida devuelva el numero entero exacto de 27 estipulado en la guia de Campuslands.

El script cuenta con un filtro de "early return" (`!participantes?.length`) en la primera linea para evitar que el motor tire un fallo critico si el sistema inyecta colecciones vacias o nulas de forma imprevista.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa de la coleccion `[12, 18, 25, 30]`, bono 8 y penalizacion 3, obteniendo un puntaje final de 27 calificado como competitivo.
2. **Caso borde:** Control preventivo ante arreglos vacios o nulos devolviendo un estado controlado seguro para el backend de la liga.
3. **Caso propio:** Evaluacion proporcional de la efectividad de anotaciones de una escuadra para actualizar su posicion en la tabla general.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y desplázate hasta la ruta de esta entrega: `ejercicio-022/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js