## Justificación de la Entrega - Logica general 019

Para resolver este decimonoveno ejercicio sobre inventarios logicos enfocado en formulas quimicas, mantuve el mismo patron de desarrollo moderno, limpio y ultra-corto utilizando funciones flecha, dejando mi portafolio de entregas impecable para su revision en Campuslands.

### Como pense el problema y reglas aplicadas
En un laboratorio de desarrollo quimico, el control estricto sobre el estado de los reactivos y sustancias es cuestion de seguridad industrial. Configure la logica para mapear e interceptar de inmediato cualquier estado de tipo `bloqueado` dentro del inventario de la formula (como un reactivo vencido, inestable o sin autorizacion regulatoria). Utilice variables booleanas respaldadas por el metodo nativo `.includes()` de java scrips para evaluar el arreglo de estados en una sola pasada de memoria. Si se detecta un bloqueo y la regla lo exige, el sistema aisla el reactivo para mitigar riesgos antes de procesar sintesis `pendientes` ordinarias.

El codigo incluye su respectivo filtro de seguridad `!items?.length` en la primera linea para atajar de inmediato valores nulos o vacios, garantizando que el programa responda de manera limpia con un objeto de error controlado en vez de crashear feo en la terminal.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa con la salida exacta exigida por la guia (`accion: revisar bloqueado`).
2. **Caso borde:** Control preventivo inyectando colecciones nulas o vacias para asegurar la estabilidad del software.
3. **Caso propio:** Validacion de un lote de reactivos aprobados y estables para dar luz verde a la preparacion de la formula quimica.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-019/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js