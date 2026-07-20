## Justificación de la Entrega - Logica matematica 028

Para resolver este vigesimooctavo ejercicio de logica matematica sobre patrones de puntuacion en peliculas de ciencia ficcion, mantuve el enfoque de desarrollo compacto, moderno y limpio utilizando JavaScript nativo.

### Como pense el problema y reglas aplicadas
En el analisis estadistico del cine, evaluar los patrones de puntuacion (como las calificaciones de la critica especializada y la retencion de audiencia) nos permite diagnosticar el exito cultural y comercial de un proyecto. Implemente el metodo nativo `.reduce()` para calcular en una sola linea de codigo la sumatoria de las muestras del arreglo, dividiendo el total por su longitud para encontrar la media estadistica base de la puntuacion de la obra.

Posteriormente, sume el bono por distinciones en festivales y reste la penalizacion por problemas de distribucion o reseñas negativas segun las reglas de negocio estipuladas. Para finalizar, aplique un `Math.round()` con el fin de blindar el calculo contra errores de punto flotante de java scrips, garantizando que la salida devuelva el numero entero exacto de 27 estipulado en la guia de Campuslands.

El script cuenta con un filtro de "early return" (`!participantes?.length`) en la primera linea para evitar que el motor tire un fallo critico si el sistema inyecta colecciones vacias o nulas de forma imprevista.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion de la coleccion `[12, 18, 25, 30]`, bono 8 y penalizacion 3, obteniendo un puntaje final de 27 calificado como competitivo.
2. **Caso borde:** Control preventivo ante arreglos vacios o nulos devolviendo un estado controlado seguro para el backend analitico del estudio.
3. **Caso propio:** Evaluacion de la consistencia de puntuaciones en el preestreno de una produccion de opera espacial en formato digital.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y desplázate hasta la ruta de esta entrega: `ejercicio-028/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js