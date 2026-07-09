## Justificación de la Entrega - Logica matematica 014

Para resolver este decimocuarto ejercicio de logica matematica sobre areas y perimetros en un estudio de tatuajes, mantuve el enfoque de desarrollo moderno, compacto y limpio que implemente en los retos anteriores utilizando funciones flecha.

### Como pense el problema y reglas aplicadas
En la preparacion de un tatuaje, evaluar el promedio de las dimensiones en area y perimetro de la plantilla ayuda a estimar los insumos y el tiempo del artista. Utilice el metodo nativo `.reduce()` para resolver de un solo viaje la sumatoria de las dimensiones, dividiendo el total por la longitud del arreglo para encontrar la media estadistica base. 

Despues le sume el bono por complejidad del diseño y le reste la penalizacion de escala segun las reglas de negocio, aplicando un `Math.round()` al final para neutralizar los decimales flotantes nativos de java scrips. Esto asegura que el sistema entregue de forma exacta el numero entero de 27 que solicita la guia de Campuslands.

El script cuenta con un filtro de "early return" (`!participantes?.length`) en la primera linea para atajar de inmediato si llegan arreglos vacios o datos nulos, evitando de esta forma un crash en la terminal.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa inyectando la coleccion `[12, 18, 25, 30]`, bono 8 y penalizacion 3, retornando un puntaje de 27 clasificado como competitivo.
2. **Caso borde:** Control preventivo ante arreglos vacios o nulos devolviendo un estado controlado.
3. **Caso propio:** Medicion y ajuste lineal para la escala de un microtatuaje.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-014/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js