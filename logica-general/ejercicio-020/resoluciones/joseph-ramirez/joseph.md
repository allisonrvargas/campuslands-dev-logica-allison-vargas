## Justificación de la Entrega - Logica general 020

Para resolver este vigesimo ejercicio sobre estrategias de seleccion enfocado en comida urbana, mantuve el mismo patron de desarrollo moderno, limpio y ultra-corto utilizando funciones flecha, dejando mi portafolio de entregas impecable para su revision en Campuslands.

### Como pense el problema y reglas aplicadas
En la operacion logistica de un puesto de comida urbana o food truck, la velocidad de seleccion de pedidos y control de alertas en insumos es crucial para el flujo continuo de la cocina. Configure la logica para mapear e verificar de inmediato cualquier estado de tipo `bloqueado` en el lote o comanda (como ingredientes con alertas de alergia o desabastecimiento critico). Utilice variables booleanas impulsadas por el metodo nativo `.includes()` de java scrips para escanear el arreglo en una sola pasada de memoria. Si se detecta un bloqueo y la regla del negocio lo requiere, el sistema congela la comanda para mitigar riesgos antes de procesar ordenes `pendientes` ordinarias de alta prioridad.

El codigo incluye su respectivo filtro de seguridad `!items?.length` en la primera linea para atajar de inmediato valores nulos o vacios, garantizando que el programa responda de manera limpia con un objeto de error controlado en vez de crashear feo en la terminal.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Evaluacion exitosa con la salida exacta exigida por la guia (`accion: revisar bloqueado`).
2. **Caso borde:** Control preventivo inyectando colecciones nulas o vacias para asegurar la estabilidad del software ante datos huerfanos.
3. **Caso propio:** Validacion de una comanda limpia con ingredientes aprobados para dar luz verde al despacho inmediato del pedido.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta carpeta: `ejercicio-020/resoluciones/joseph-ramirez/`.
2. Ejecuta el archivo principal con el comando:
   ```bash
   node joseph-ramirez.js