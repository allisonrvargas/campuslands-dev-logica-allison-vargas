## Justificación de la Entrega - Logica matematica 011

Para resolver este decimoprimer ejercicio de logica matematica sobre conteo combinatorio simple en kickboxing, mantuve el enfoque de desarrollo compacto y limpio que implemente en los retos anteriores, usando funciones flecha para simplificar la lectura de la solucion.

Implemente el metodo nativo `.reduce()` para resolver en una sola linea de codigo la sumatoria de las puntuaciones de los participantes, dividiendo el total por la longitud del arreglo para sacar la media aritmetica base. Despues le sume el bono y le reste la penalizacion segun las reglas del negocio. Al final le coloque un `Math.round()` para clavar el resultado en un entero exacto, evitando que los decimales flotantes alteren los datos y asegurando de esta forma el puntaje final de 27 idéntico al de la guia.

El programa viene protegido desde la primera linea con un "early return" usando `!participantes?.length` por si el sistema llega a mandar colecciones vacias o nulas por error, evitando de esta manera un crash en la consola de comandos. Funciona de manera nativa sin requerir modulos externos de node

### Como ejecutar la solucion
1. Abrir la terminal de comandos adentro de la carpeta de mi resolucion del ejercicio 011.
2. Correr el script ejecutando el comando `node joseph-ramirez.js`.
3. En la pantalla saldran impresas las tres pruebas: el caso base del ejemplo que devuelve 27 competitivo, el control del caso borde con datos nulos y mi caso de prueba propio para rounds de sparring