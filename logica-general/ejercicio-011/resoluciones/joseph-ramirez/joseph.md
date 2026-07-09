## Justificación de la Entrega - Logica general 011

Para este decimoprimer ejercicio basado en la organizacion de listas dentro de una academia de kickboxing, implemente una solucion bastante limpia y directa utilizando funciones flecha para evitar declarar lineas de codigo de forma innecesaria.

Defini dos variables booleanas (`esBloqueado` y `esPendienteUrgente`) apoyadas por el metodo nativo `.includes()` de java scrips para escanear de un solo viaje el estado de los competidores. Lo pense de esta manera porque en un torneo de kickboxing, cualquier peleador que tenga su estatus bloqueado (ya sea por no dar el peso o por falta de examen medico) tiene que ser revisado de inmediato por la comision para cuidar su salud antes de procesar los combates pendientes ordinarios.

Asegure el script dejando un candado de seguridad con `!items?.length` en la primera linea para evitar que la terminal tire un crash feo si la entrada de datos llega corrupta o nula. Funciona de manera 100% nativa en la consola sin necesidad de usar modulos externos.

### Como ejecutar la solucion
1. Abrir la consola en la ruta de mi carpeta personal del ejercicio 011.
2. Ejecutar el archivo usando el comando `node joseph-ramirez.js`.
3. En la pantalla se imprimiran las tres pruebas corriendo: el caso de la guia con la salida exacta solicitada, la proteccion ante datos nulos y mi prueba propia de un atleta listo para pelear