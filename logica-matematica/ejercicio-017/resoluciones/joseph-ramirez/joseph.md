## Justificación de la Entrega - Logica matematica 017

Para resolver este decimosimo ejercicio de logica matematica sobre estadisticas de ranking en arquitectura 3D, mantuve el enfoque de desarrollo compacto, moderno y limpio utilizando JavaScript nativo.

### Como pense el problema y reglas aplicadas
En el desarrollo de software de arquitectura 3D y entornos BIM, analizar las estadisticas de los puntajes de rendimiento de las estaciones de trabajo ayuda a optimizar las granjas de renderizado. Implemente el metodo nativo `.reduce()` para calcular en una sola linea de codigo la sumatoria de las metricas de rendimiento del arreglo, dividiendo el total por su longitud para encontrar la media estadistica base.

Posteriormente, sume el bono por optimizacion de mallas y reste la penalizacion de sobrecarga de poligonos segun las reglas de negocio. Para finalizar, aplique un `Math.round()` con el fin de blindar el calculo contra errores de punto flotante de java scrips, garantizando que la salida devuelva el numero entero exacto de 27 estipulado en la guia de Campuslands.

El script cuenta con un filtro de "early return" (`!participantes?.length`) en la primera linea para evitar que el motor tire un fallo critico si el sistema inyecta colecciones vacias o nulas.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa de la coleccion `[12, 18, 25, 30]`, bono 8 y penalizacion 3, obteniendo un puntaje final de 27 calificado como competitivo.
2. **Caso borde:** Control preventivo ante arreglos vacios o nulos devolviendo un estado controlado seguro.
3. **Caso propio:** Analisis de estadisticas de carga en el procesamiento de un modelo estructural BIM de alta eficiencia.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-017/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js