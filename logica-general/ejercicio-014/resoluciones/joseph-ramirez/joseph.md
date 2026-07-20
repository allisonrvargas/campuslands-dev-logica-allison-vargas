## Justificación de la Entrega - Logica general 014

Para resolver este decimocuarto ejercicio sobre diagnostico de errores enfocado en un estudio de tatuajes, mantuve el mismo patron de desarrollo moderno y ultra-corto utilizando funciones flecha, lo que deja mi carpeta de entregas impecable y directa para su revision en Campuslands.

### Como pense el problema y reglas aplicadas
En un estudio de tatuajes, el control sanitario y administrativo es estricto. Configure la logica para mapear y aislar de inmediato cualquier estado de tipo `bloqueado` en la orden o el inventario (como falta de consentimiento legal del cliente o tintas fuera de fecha). Utilice variables booleanas apoyadas en el metodo nativo `.includes()` de java scrips para escanear el arreglo en una sola pasada. Si se detecta un bloqueo y la regla lo exige, el sistema frena todo el flujo para mitigar riesgos antes de atender prioridades `pendientes` ordinarias.

El codigo incluye su respectivo filtro de seguridad `!items?.length` en la primera linea para atajar valores nulos o vacios, garantizando que el programa responda de manera limpia con un objeto de error controlado en ves de crashear feo en la terminal.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa con la salida exacta de la guia (`accion: revisar bloqueado`).
2. **Caso borde:** Control preventivo inyectando colecciones nulas o vacias para asegurar estabilidad.
3. **Caso propio:** Validacion de una sesion limpia con materiales aprobados para dar luz verde al artista.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-014/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js