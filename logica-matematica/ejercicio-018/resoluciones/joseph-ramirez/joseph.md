## Justificación de la Entrega - Logica matematica 018

Para resolver este decimoctavo ejercicio de logica matematica sobre normalizacion de puntajes en soldadura, mantuve el enfoque de desarrollo compacto, moderno y limpio utilizando JavaScript nativo.

### Como pense el problema y reglas aplicadas
En los procesos de certificacion industrial de soldadura, analizar los promedios de las pruebas de control de calidad permite normalizar el rendimiento de los operarios bajo un mismo criterio. Implemente el metodo nativo `.reduce()` para calcular en una sola linea de codigo la sumatoria de las muestras del arreglo, dividiendo el total por su longitud para encontrar la media estadistica base.

Posteriormente, sume el bono por consistencia del cordon y reste la penalizacion por porosidades o defectos microscopicos segun las reglas de negocio. Para finalizar, aplique un `Math.round()` con el fin de blindar el calculo contra errores de punto flotante de java scrips, garantizando que la salida devuelva el numero entero exacto de 27 estipulado en la guia de Campuslands.

El script cuenta con un filtro de "early return" (`!participantes?.length`) en la primera linea para evitar que el motor tire un fallo critico si el sistema inyecta colecciones vacias o nulas.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa de la coleccion `[12, 18, 25, 30]`, bono 8 y penalizacion 3, obteniendo un puntaje final de 27 calificado como competitivo.
2. **Caso borde:** Control preventivo ante arreglos vacios o nulos devolviendo un estado controlado seguro.
3. **Caso propio:** Normalizacion de puntajes para ensayos de traccion en un grupo de soldadura TIG de alta precision.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-018/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js