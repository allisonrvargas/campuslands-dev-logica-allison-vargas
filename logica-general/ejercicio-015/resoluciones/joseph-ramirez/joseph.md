## Justificación de la Entrega - Logica general 015

Para resolver este decimoquinto ejercicio sobre reglas de negocio enfocado en dibujo digital, mantuve el mismo patron de desarrollo moderno y ultra-corto utilizando funciones flecha, lo que deja mi carpeta de entregas limpia y lista para su revision en Campuslands.

### Como pense el problema y reglas aplicadas
En una aplicacion o sistema de gestion de dibujo digital, el control del estado de los archivos y capas es fundamental para evitar la perdida de informacion o problemas de licencias. Configure la logica para mapear e interceptar de inmediato cualquier estado de tipo `bloqueado` en el lienzo (como una capa bloqueada por derechos de autor o corrupcion de datos). Utilice variables booleanas apoyadas en el metodo nativo `.includes()` de java scrips para escanear el arreglo en una sola pasada. Si se detecta un bloqueo y la regla lo exige, el sistema frena todo el flujo para mitigar riesgos antes de procesar renders `pendientes` ordinarios.

El codigo incluye su respectivo filtro de seguridad `!items?.length` en la primera linea para atajar valores nulos o vacios, garantizando que el programa responda de manera limpia con un objeto de error controlado en vez de crashear feo en la terminal.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa con la salida exacta de la guia (`accion: revisar bloqueado`).
2. **Caso borde:** Control preventivo inyectando colecciones nulas o vacias para asegurar estabilidad.
3. **Caso propio:** Validacion de un lienzo limpio con capas aprobadas para dar luz verde al renderizado final.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-015/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js