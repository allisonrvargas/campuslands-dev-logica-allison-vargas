## Justificación de la Entrega - Logica general 012

Para resolver este decimosegundo ejercicio sobre comparacion de opciones en un torneo de pingpong, mantuve el mismo patron de desarrollo moderno y ultra-corto utilizando funciones flecha, lo que deja mi carpeta de entregas impecable y facil de revisar en Campuslands.

Estableci variables booleanas (`esBloqueado` y `esPendienteUrgente`) combinadas con el metodo nativo `.includes()` de java scrips para escanear de un solo golpe el estado de las mesas y las llaves de juego. Lo diseñe haci porque en la gestion de un torneo de pingpong, cualquier set o jugador que este bloqueado por reglamento o falta de juez se debe interceptar al inicio para evitar retrasar el flujo de la competencia.

El codigo incluye su filtro de seguridad `!items?.length` en la primera linea para atajar valores nulos o vacios, garantizando que el programa responda de manera limpia con un objeto de error controlado en ves de crashear feo. Corre nativamente sin instalar modulos externos

### Como ejecutar la solucion
1. Abrir la consola de comandos en la ruta de mi carpeta personal de este ejercicio 012.
2. Correr el script ejecutando el comando `node joseph-ramirez.js`.
3. En la terminal se desplegaran las tres pruebas: el caso base con la salida exacta de la guia, la captura de datos corruptos y mi prueba propia con una mesa de juego lista