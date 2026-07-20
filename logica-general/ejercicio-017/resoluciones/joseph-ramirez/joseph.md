## Justificación de la Entrega - Logica general 017

Para resolver este decimosimo ejercicio sobre tablas de decision enfocado en arquitectura 3D, mantuve el mismo patron de desarrollo moderno y ultra-corto utilizando funciones flecha, lo que deja mi carpeta de entregas limpia y estructurada para su revision en Campuslands.

### Como pense el problema y reglas aplicadas
En la gestion de un software de arquitectura 3D (BIM), controlar las tablas de decision de las capas y materiales estructurales es vital para evitar problemas de colisiones o fallos de diseño en la obra real. Configure la logica para mapear e interceptar de inmediato cualquier estado de tipo `bloqueado` en las capas analizadas (como un elemento estructural que no cumple la norma sísmica). Utilice variables booleanas apoyadas en el metodo nativo `.includes()` de java scrips para escanear el arreglo en una sola pasada. Si se detecta un bloqueo y la regla lo exige, el sistema frena todo el flujo para mitigar riesgos antes de procesar aprobaciones `pendientes` ordinarias.

El codigo incluye su respectivo filtro de seguridad `!items?.length` en la primera linea para atajar de inmediato valores nulos o vacios, garantizando que el programa responda de manera limpia con un objeto de error controlado en vez de crashear feo en la terminal.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa con la salida exacta de la guia (`accion: revisar bloqueado`).
2. **Caso borde:** Control preventivo inyectando colecciones nulas o vacias para asegurar estabilidad.
3. **Caso propio:** Validacion de un plano limpio con capas estructurales aprobadas para dar luz verde al renderizado.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-017/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js