## Justificación de la Entrega - Logica matematica 013

Para resolver este decimotercer ejercicio de logica matematica sobre coordenadas y distancia en paracaidismo, mantuve el enfoque de desarrollo compacto y limpio que implemente en los retos anteriores, usando funciones flecha para simplificar la lectura de la solucion.

### Como pense el problema y reglas aplicadas
En la planeacion de saltos de paracaidismo, calcular las coordenadas promedio y medir la distancia de desviacion respecto a la zona de aterrizaje (*Drop Zone*) es clave para la seguridad. Implemente el metodo nativo `.reduce()` para resolver de un solo viaje la sumatoria de las distancias de los participantes, dividiendo el total por la longitud del arreglo para sacar la media aritmetica base del punto de caida. 

Despues le sume el bono de precision de apertura y le reste la penalizacion de deriva por viento segun las reglas del negocio. Al final le coloque un `Math.round()` para clavar el resultado en un entero exacto, evitando que los decimales flotantes nativos de java scrips alteren los datos y asegurando de esta forma el puntaje final de 27 idéntico al de la guia.

El programa viene protegido desde la primera linea con un "early return" usando `!participantes?.length` por si el sistema llega a mandar colecciones vacias o nulas por error, evitando de esta manera un crash en la consola de comandos.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa inyectando `[12, 18, 25, 30]`, bono 8 y penalizacion 3, retornando un puntaje de 27 clasificado como competitivo.
2. **Caso borde:** Control preventivo ante colecciones vacias o datos corruptos.
3. **Caso propio:** Medicion de precision en salto grupal con clasificacion alta.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-013/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando nativo de Node.js:
   ```bash
   node joseph-ramirez.js

   