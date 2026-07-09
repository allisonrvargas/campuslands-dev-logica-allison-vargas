## Justificación de la Entrega - Logica general 025

Para resolver este vigesimoquinto ejercicio sobre ordenamiento de prioridades enfocado en un taller mecanico, mantuve el enfoque de desarrollo moderno, limpio y ultra-corto mediante funciones flecha de java scrips, garantizando una entrega estandarizada para Campuslands.

### Como pense el problema y reglas aplicadas
En la operacion diaria de un taller mecanico, ordenar el flujo de los vehiculos y repuestos en las bahias es crucial para la seguridad y la eficiencia de los tecnicos. Configure la logica para identificar e interceptar de forma prioritaria cualquier estado de tipo `bloqueado` dentro de las ordenes de trabajo (como autos esperando refacciones importadas o con bloqueos de seguridad por peritaje de aseguradoras). Apoyandome en variables booleanas y el metodo nativo `.includes()`, el script escanea el arreglo de estados en un unico paso de memoria. Si se detecta un bloqueo activo, el sistema frena la asignacion automatica de la bahia para resolver la anomalia antes de procesar mantenimientos `pendientes` ordinarios que tengan prioridad alta.

El codigo incluye su respectivo filtro de seguridad `!items?.length` en la primera linea para atajar entradas nulas o vacias, obligando al programa a devolver una respuesta estructurada en lugar de fallar de manera critica en la terminal de comandos.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Validacion exitosa que entrega el resultado exacto estipulado en la guia (`accion: revisar bloqueado`).
2. **Caso borde:** Inyeccion controlada de datos nulos y vacios para certificar la resiliencia del software ante entradas huerfanas.
3. **Caso propio:** Filtrado de una orden de trabajo limpia con mantenimientos aprobados para dar luz verde a la asignacion de un mecanico.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta entrega: `ejercicio-025/resoluciones/joseph-ramirez/`.
2. Corre el script principal ejecutando el comando:
   ```bash
   node joseph-ramirez.js
   