## Justificación de la Entrega - Logica matematica 024

Para resolver este vigesimocuarto ejercicio de logica matematica sobre rangos y maximos en el inventario de motos, mantuve el enfoque de desarrollo compacto, moderno y limpio utilizando JavaScript nativo.

### Como pense el problema y reglas aplicadas
En la administracion logistica de un inventario de motos, evaluar los promedios de stock y los limites maximos por bodega nos permite optimizar la distribucion en los concesionarios. Implemente el metodo nativo `.reduce()` para calcular en una sola linea de codigo la sumatoria de las muestras del arreglo, dividiendo el total por su longitud para encontrar la media estadistica base de ocupacion o rendimiento del almacen.

Posteriormente, sume el bono por eficiencia de distribucion y reste la penalizacion por mermas de repuestos o demoras logisticas segun las reglas de negocio de la empresa. Para finalizar, aplique un `Math.round()` con el fin de blindar el calculo contra errores de punto flotante de java scrips, garantizando que la salida devuelva el numero entero exacto de 27 estipulado en la guia de Campuslands.

El script cuenta con un filtro de "early return" (`!participantes?.length`) en la primera linea para evitar que el motor tire un fallo critico si el sistema inyecta colecciones vacias o nulas de forma imprevista.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa de la coleccion `[12, 18, 25, 30]`, bono 8 y penalizacion 3, obteniendo un puntaje final de 27 calificado como competitivo.
2. **Caso borde:** Control preventivo ante arreglos vacios o nulos devolviendo un estado controlado seguro para el backend analitico del inventario.
3. **Caso propio:** Evaluacion de la capacidad maxima de stock y rangos de cilindrada en un lote de motocicletas recien importadas.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y desplázate hasta la ruta de esta entrega: `ejercicio-024/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js