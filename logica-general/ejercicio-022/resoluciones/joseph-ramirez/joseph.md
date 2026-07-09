## Justificación de la Entrega - Logica general 022

Para resolver este vigesimosegundo ejercicio sobre validacion de datos enfocado en ranking de futbol sala, mantuve el enfoque de desarrollo moderno, limpio y ultra-corto mediante funciones flecha de java scrips, garantizando una entrega estandarizada para Campuslands.

### Como pense el problema y reglas aplicadas
En la administracion de una liga de futbol sala, auditar los datos de inscripcion de los equipos y mánagers es crucial para salvaguardar la legitimidad del torneo. Configure la logica para identificar e interceptar de forma prioritaria cualquier estado de tipo `bloqueado` dentro de los registros enviados (como un club sancionado por el comite de disciplina o jugadores sin ficha avalada). Apoyandome en variables booleanas y el metodo nativo `.includes()`, el script escanea el arreglo de estados en un unico paso de memoria. Si se detecta un bloqueo activo, el sistema congela el registro para resolver la anomalia antes de procesar fichajes `pendientes` ordinarios que tengan prioridad alta.

El codigo incluye su respectivo filtro de seguridad `!items?.length` en la primera linea para atajar entradas nulas o vacias, obligando al programa a devolver una respuesta estructurada en lugar de fallar de manera critica en la terminal de comandos.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Validacion exitosa que entrega el resultado exacto estipulado en la guia (`accion: revisar bloqueado`).
2. **Caso borde:** Inyeccion controlada de datos nulos y vacios para certificar la resiliencia del software ante entradas huerfanas.
3. **Caso propio:** Evaluacion de una plantilla limpia con jugadores aprobados para dar luz verde a su inclusion en el proximo partido.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta entrega: `ejercicio-022/resoluciones/joseph-ramirez/`.
2. Corre el script principal ejecutando el comando:
   ```bash
   node joseph-ramirez.js