## Justificación de la Entrega - Logica general 013

Para resolver este decimotercer ejercicio sobre resolucion de casos enfocado en paracaidismo, implemente una solucion robusta y altamente eficiente utilizando JavaScript moderno mediante funciones flecha y metodos de busqueda nativos.

### Como pense el problema y reglas aplicadas
En una operacion de paracaidismo, la seguridad es lo primero. Por ende, configure la logica para mapear y aislar de inmediato cualquier estado de tipo `bloqueado` en la lista de chequeo (como un fallo detectado en el altimetro o el paracaidas de emergencia). Utilice variables booleanas apoyadas en `.includes()` para evaluar las condiciones de forma inmediata. Si existe un bloqueo y la regla del negocio lo exige, el sistema prioriza congelar la operacion antes de validar prioridades `pendientes` ordinarias o autorizar el despegue.

Tambien coloque una clausula de salvaguarda (*early return*) en la primera linea del flujo para evitar que si la plataforma inyecta datos nulos o vacios por error, el sistema tire un fallo critico, respondiendo en su lugar de forma limpia con una accion controlada.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa con salida exacta combinando elementos aprobados, pendientes y bloqueados con prioridad alta.
2. **Caso borde:** Control preventivo inyectando valores vacios y colecciones nulas.
3. **Caso propio:** Validacion de un escenario limpio con equipamiento aprobado para autorizar la salida de la aeronave.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-013/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando nativo de Node.js:
   ```bash
   node joseph-ramirez.js

   