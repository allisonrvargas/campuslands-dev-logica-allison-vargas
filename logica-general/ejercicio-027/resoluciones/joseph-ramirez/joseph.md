## Justificación de la Entrega - Logica general 027

Para resolver este vigesimoséptimo ejercicio sobre deteccion de inconsistencias enfocado en un entorno de playlist musical, mantuve el enfoque de desarrollo moderno, limpio y ultra-corto mediante funciones flecha de java scrips, garantizando una entrega estandarizada para Campuslands.

### Como pense el problema y reglas aplicadas
En el desarrollo de plataformas de streaming musical o reproductores multimedia, es imperativo asegurar que los metadatos y los archivos binarios no presenten anomalias antes de ser agregados a la cola de reproduccion activa. Configure la logica para identificar e interceptar de forma prioritaria cualquier estado de tipo `bloqueado` dentro del registro de pistas (como archivos de audio corruptos, canciones con reclamos de copyright activos o fallas de bitrate). Apoyandome en variables booleanas y el metodo nativo `.includes()`, el script busca inconsistencias criticas en un unico paso de memoria. Si halla un bloqueo activo, el sistema frena la cola para corregir la pista antes de procesar tareas `pendientes` ordinarias de prioridad alta.

El codigo incluye su respectivo filtro de seguridad `!items?.length` en la primera linea para atajar entradas nulas o vacias, obligando al programa a devolver una respuesta estructurada en lugar de fallar de manera critica en la terminal de comandos.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Validacion exitosa que entrega el resultado exacto estipulado en la guia (`accion: revisar bloqueado`).
2. **Caso borde:** Inyeccion controlada de datos nulos y vacios para certificar la resiliencia del software ante entradas huerfanas.
3. **Caso propio:** Busqueda de inconsistencias en una playlist limpia con canciones aprobadas para dar luz verde a la reproduccion inmediata.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta entrega: `ejercicio-027/resoluciones/joseph-ramirez/`.
2. Corre el script principal ejecutando el comando:
   ```bash
   node joseph-ramirez.js