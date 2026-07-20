## Justificación de la Entrega - Logica matematica 023

Para resolver este vigesimotercer ejercicio de logica matematica sobre promedios y medianas en torneos de esports, mantuve el enfoque de desarrollo compacto, moderno y limpio utilizando JavaScript nativo.

### Como pense el problema y reglas aplicadas
En el analisis de datos de los esports, evaluar los promedios de rendimiento de los jugadores y equipos es crucial para estructurar las siembras en brackets y medir la consistencia general. Implemente el metodo nativo `.reduce()` para calcular en una sola linea de codigo la sumatoria de las muestras del arreglo, dividiendo el total por su longitud para encontrar la media estadistica base del desempeño del equipo.

Posteriormente, sume el bono por objetivos de mapa asegurados y reste la penalizacion por penalizaciones de tiempo o muertes acumuladas segun las reglas de negocio de la competencia. Para finalizar, aplique un `Math.round()` con el fin de blindar el calculo contra errores de punto flotante de java scrips, garantizando que la salida devuelva el numero entero exacto de 27 estipulado en la guia de Campuslands.

El script cuenta con un filtro de "early return" (`!participantes?.length`) en la primera linea para evitar que el motor tire un fallo critico si el sistema inyecta colecciones vacias o nulas de forma imprevista.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa de la coleccion `[12, 18, 25, 30]`, bono 8 y penalizacion 3, obteniendo un puntaje final de 27 calificado como competitivo.
2. **Caso borde:** Control preventivo ante arreglos vacios o nulos devolviendo un estado controlado seguro para el backend analitico del torneo.
3. **Caso propio:** Evaluacion promediada del rendimiento cuantitativo de una escuadra para determinar su clasificacion en fases eliminatorias.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y desplázate hasta la ruta de esta entrega: `ejercicio-023/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js