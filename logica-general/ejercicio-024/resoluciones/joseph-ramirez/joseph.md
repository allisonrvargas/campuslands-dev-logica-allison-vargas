## Justificación de la Entrega - Logica general 024

Para resolver este vigesimocuarto ejercicio sobre filtros por condiciones enfocado en un inventario de motos, mantuve el enfoque de desarrollo moderno, limpio y ultra-corto mediante funciones flecha de java scrips, garantizando una entrega estandarizada para Campuslands.

### Como pense el problema y reglas aplicadas
En la gestion logistica de un inventario de motocicletas, filtrar los estados de las unidades y repuestos es crucial para salvaguardar la seguridad vial y el flujo del taller. Configure la logica para identificar e interceptar de forma prioritaria cualquier estado de tipo `bloqueado` dentro de las unidades (como motos bajo alertas de recall de fabrica, problemas de matriculacion o fallos mecanicos graves). Apoyandome en variables booleanas y el metodo nativo `.includes()`, el script escanea el arreglo de estados en un unico paso de memoria. Si se detecta un bloqueo activo, el sistema frena la orden de despacho para resolver la anomalia antes de procesar asignaciones `pendientes` ordinarias que tengan prioridad alta.

El codigo incluye su respectivo filtro de seguridad `!items?.length` en la primera linea para atajar entradas nulas o vacias, obligando al programa a devolver una respuesta estructurada en lugar de fallar de manera critica en la terminal de comandos.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Validacion exitosa que entrega el resultado exacto estipulado en la guia (`accion: revisar bloqueado`).
2. **Caso borde:** Inyeccion controlada de datos nulos y vacios para certificar la resiliencia del software ante entradas huerfanas.
3. **Caso propio:** Filtrado de un lote de motocicletas aprobadas y con documentacion al dia para dar luz verde a su distribucion comercial.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta entrega: `ejercicio-024/resoluciones/nombre-apellido/`.
2. Corre el script principal ejecutando el comando:
   ```bash
   node joseph-ramirez.js