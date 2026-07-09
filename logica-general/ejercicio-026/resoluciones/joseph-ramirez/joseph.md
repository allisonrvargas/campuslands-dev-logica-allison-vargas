## Justificación de la Entrega - Logica general 026

Para resolver este vigesimosexto ejercicio sobre busqueda de elementos enfocado en autos hiperdeportivos, mantuve el enfoque de desarrollo moderno, limpio y ultra-corto mediante funciones flecha de java scrips, garantizando una entrega estandarizada para Campuslands.

### Como pense el problema y reglas aplicadas
En el ecosistema de los autos hiperdeportivos de alto rendimiento, buscar y auditar los estados mecánicos y de telemetría es crucial para garantizar la seguridad del piloto en pista. Configure la logica para identificar e interceptar de forma prioritaria cualquier estado de tipo `bloqueado` dentro del registro de componentes (como un fallo critico en el sistema hibrido o componentes de fibra de carbono no homologados). Apoyandome en variables booleanas y el metodo nativo `.includes()`, el script busca los estados criticos en un unico paso de memoria. Si encuentra un bloqueo activo, el sistema congela la autorizacion de salida a pista para resolver la falla antes de procesar tareas `pendientes` ordinarias de prioridad alta.

El codigo incluye su respectivo filtro de seguridad `!items?.length` en la primera linea para atajar entradas nulas o vacias, obligando al programa a devolver una respuesta estructurada en lugar de fallar de manera critica en la terminal de comandos.

### Casos de prueba ejecutados
1. **Caso base del ejemplo:** Validacion exitosa que entrega el resultado exacto estipulado en la guia (`accion: revisar bloqueado`).
2. **Caso borde:** Inyeccion de datos nulos y vacios para certificar la resiliencia del software ante entradas huerfanas.
3. **Caso propio:** Busqueda en un hiperdeportivo con todos sus modulos aprobados para dar luz verde a su despliegue en pista.

### Como ejecutar la solucion
1. Abre tu terminal de comandos y navega hasta la ruta de esta entrega: `ejercicio-026/resoluciones/joseph-ramirez/`.
2. Corre el script principal ejecutando el comando:
   ```bash
   node joseph-ramirez.js