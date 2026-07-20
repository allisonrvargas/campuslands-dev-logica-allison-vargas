## Justificación de la Entrega - Logica matematica 012

Para resolver este decimosegundo ejercicio de logica matematica sobre probabilidad basica en un torneo de pingpong, mantuve la linea de diseño limpia, avanzada y super compacta usando funciones flecha que use en los retos anteriores para dejar mi portafolio impecable.

Implemente el metodo nativo `.reduce()` para resolver de un solo viaje la sumatoria de los rendimientos de los participantes, dividiendo el total por la longitud del arreglo para encontrar la media estadistica base. Despues le aplique el bono de probabilidad y le reste la penalizacion correspondiente segun las reglas de negocio, metiendole un `Math.round()` al final del calculo para neutralizar los decimales flotantes nativos de java scrips, asegurando haci que devuelva el numero entero exacto de 27 que pide la guia de Campuslands.

El script cuenta con un filtro de "early return" (`!participantes?.length`) en la primera linea para atajar de inmediato si llegan arreglos vacios o datos nulos por un fallo de red o de base de datos, evitando de esta forma un crash en la consola. Corre de forma nativa sin instalar ninguna libreria externa de node

### Como ejecutar la solucion
1. Abrir la terminal de comandos en la ruta de mi carpeta personal del ejercicio 012.
2. Correr el script ejecutando el comando tipico `node joseph-ramirez.js`.
3. En la pantalla saldran listadas las tres pruebas corriendo: el caso base de la guia con el resultado exacto, el control de datos corruptos para el caso borde y mi caso propio para calculos de matchpoint