## Justificación de la Entrega - Logica matematica 019

Para resolver este decimonoveno ejercicio de logica matematica sobre validaciones numericas en formulas quimicas, mantuve el enfoque de desarrollo compacto, moderno y limpio utilizando JavaScript nativo.

### Como pense el problema y reglas aplicadas
En el control de calidad de un laboratorio quimico, analizar los promedios de las mediciones cuantitativas permite validar la estabilidad y el rendimiento de una solucion o reaccion. Implemente el metodo nativo `.reduce()` para calcular en una sola linea de codigo la sumatoria de las muestras del arreglo, dividiendo el total por su longitud para encontrar la media estadistica base.

Posteriormente, sume el bono por eficiencia de la reaccion y reste la penalizacion por impurezas encontradas segun las reglas de negocio. Para finalizar, aplique un `Math.round()` con el fin de blindar el calculo contra errores de punto flotante de java scrips, garantizando que la salida devuelva el numero entero exacto de 27 estipulado en la guia de Campuslands.

El script cuenta con un filtro de "early return" (`!participantes?.length`) en la primera linea para evitar que el motor tire un fallo critico si el sistema inyecta colecciones vacias o nulas de forma imprevista.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa de la coleccion `[12, 18, 25, 30]`, bono 8 y penalizacion 3, obteniendo un puntaje final de 27 calificado como competitivo.
2. **Caso borde:** Control preventivo ante arreglos vacios o nulos devolviendo un estado controlado seguro.
3. **Caso propio:** Validacion numerica de pureza y estabilidad en una solucion molar de alta precision.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-019/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js