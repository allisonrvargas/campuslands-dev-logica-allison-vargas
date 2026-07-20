# Ejercicio 021: Sistema de Matchmaking y Control de Seguridad Antitrampas

## Análisis del Problema

El objetivo es desarrollar un componente de software para un sistema de emparejamiento (*matchmaking*) en videojuegos competitivos en línea que evalúe el estado de los jugadores en la sala, aplicando prioridades dinámicas para detener o desviar el flujo de la cola ante cualquier bloqueo por reportes o detecciones del sistema antitrampas.

* **Entrada:** Un objeto contenedor con la siguiente firma:
    * `items`: Array de Strings (Estados de los competidores o la sala: `"aprobado"`, `"pendiente"`, `"bloqueado"`).
    * `prioridad`: String (Criticidad del procesamiento de emparejamiento: `"alta"`, `"media"`, `"baja"`).
    * `regla`: String (Directriz del sistema antitrampas o de la cola competitiva, ej: `"revisar bloqueados primero"`).
* **Proceso:** 1. Validar a través de cláusulas de guarda iniciales que el arreglo no sea nulo, vacío ni de tipo erróneo para prevenir interrupciones forzadas del sistema.
    2. Normalizar el formato de todos los textos a minúsculas (`.toLowerCase()`) para asegurar la equidad de las condiciones y omitir fallos de formato.
    3. Comprobar condicionalmente si la regla solicita priorizar bloqueos y si existen usuarios suspendidos o bloqueados en la sala.
    4. Resolver estados secuenciales de menor criticidad como cuentas en estado `"pendiente"` si la sala es segura.
* **Salida:** Un objeto con la estructura estricta: `{ accion: string, motivo: string }`.

---

## Reglas de Negocio

1. **Detección Antitrampas Crítica:** Si la `prioridad` técnica es `"alta"`, la `regla` activa corresponde exactamente a `"revisar bloqueados primero"` y la sala contiene al menos un usuario o competidor `"bloqueado"`, se frena el inicio de la partida ordinaria devolviendo la acción `"revisar bloqueado"`.
2. **Reorganización por Cuentas Pendientes:** Si la sala está libre de bloqueos pero contiene usuarios en estado `"pendiente"` (ej: verificación de cuenta en proceso), el flujo se desvía bajo la acción `"asignar cola de baja prioridad"`.
3. **Protección de Sala Vacía (Caso Borde):** Ante la total ausencia de datos de jugadores en la cola de emparejamiento (arreglo vacío), el sistema se protege de forma segura retornando la acción `"recalibrar emparejamiento"`.

---

## Casos de Prueba

### 1. Interrupción por Tramposo Detectado (Caso Normal)
* **Entrada:**
    ```json
    {
      "items": ["aprobado", "pendiente", "bloqueado"],
      "prioridad": "alta",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "revisar bloqueado",
      "motivo": "Se detectaron competidores bloqueados en la sala bajo alerta antitrampas de alta prioridad. Partida cancelada."
    }
    ```

### 2. Degradación a Cola de Baja Prioridad (Caso Alterno)
* **Entrada:**
    ```json
    {
      "items": ["aprobado", "pendiente"],
      "prioridad": "media",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "asignar cola de baja prioridad",
      "motivo": "Sala libre de bloqueos por trampas. Se detectaron usuarios pendientes de validación; la cola ha sido reorganizada."
    }
    ```

### 3. Activación de Cláusula de Guarda por Sala Vacía (Caso Borde)
* **Entrada:**
    ```json
    {
      "items": [],
      "prioridad": "alta",
      "regla": "revisar bloqueados primero"
    }
    ```
* **Resultado esperado:**
    ```json
    {
      "accion": "recalibrar emparejamiento",
      "motivo": "Ausencia total de jugadores en la cola. El sistema suspende el emparejamiento por seguridad hasta recibir más datos."
    }
    ```

---

## Arquitectura de la Solución

La solución utiliza el patrón de diseño de Cláusulas de Guarda (*Guard Clauses*) para limpiar el flujo de control de la aplicación. Al validar y abortar el procesamiento al inicio de la función en caso de argumentos inválidos, nulos o colecciones vacías, evitamos el anidamiento innecesario de bloques `if/else` (*Arrow Anti-pattern*). La búsqueda de estados específicos dentro del array aprovecha métodos nativos optimizados del motor V8 de JavaScript, manteniendo una complejidad de tiempo en el peor de los casos de $O(n)$ y una estructura de código limpia, modular y altamente mantenible.

---

## Execution del Módulo

1. Asegúrate de contar con [Node.js](https://nodejs.org/) instalado en tu estación de trabajo (versión LTS recomendada).
2. Abre la consola de comandos o terminal en el directorio raíz de este ejercicio.
3. Ejecuta el script de la solución utilizando el comando:
    ```bash
    node maria-montepeque.js
    ```