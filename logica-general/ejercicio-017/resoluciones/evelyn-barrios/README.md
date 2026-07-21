# Solución Ejercicio 17: Motor de Decisión para Planos Arquitectónicos

**Resuelto por: Evelyn Barrios**

## 1. Análisis del Problema

El reto consiste en desarrollar una función que actúe como un motor de decisión para un sistema de arquitectura. Esta función debe procesar un objeto que describe el estado de un plano y, basándose en un conjunto de reglas de negocio, determinar la siguiente acción a realizar.

Las entradas clave son una lista de `items` con sus estados (`aprobado`, `pendiente`, `bloqueado`), una `prioridad` y una `regla` de operación. La salida debe ser un objeto con una `accion` clara y un `motivo` que la justifique.

## 2. Diseño de la Solución

Para lograr una solución robusta y legible, decidí implementar un enfoque basado en **Cláusulas de Guarda (Guard Clauses)**. Este patrón es excelente para manejar validaciones y condiciones de salida temprana, lo que evita el anidamiento excesivo de `if-else` (conocido como "código flecha") y hace que la lógica principal sea más fácil de seguir.

El flujo de la función `evaluarPlano` sigue una jerarquía de prioridades:

1.  **Validación de Entrada**: La primera guarda verifica que los datos de entrada sean coherentes. Si la lista de `items` está vacía o no es un arreglo, la función retorna inmediatamente una acción de error. Esto previene fallos inesperados más adelante.
2.  **Condición de Bloqueo Crítico**: La siguiente guarda evalúa la condición más urgente: la combinación de `prioridad alta`, la regla de `revisar bloqueados primero` y la existencia de un ítem `"bloqueado"`. Si se cumple, se detiene todo y se ordena la revisión.
3.  **Condición de Pendientes**: Si no hay bloqueos críticos, se verifica si existen ítems en estado `"pendiente"`. Esta es la segunda prioridad en el flujo de trabajo.
4.  **Acción por Defecto (Caso Exitoso)**: Si ninguna de las condiciones anteriores se cumple, significa que todos los ítems están aprobados. La función llega al final y devuelve la acción de aprobación para producción.

Este diseño asegura que las decisiones se tomen en el orden correcto de importancia y que el código sea fácil de depurar y extender en el futuro.

## 3. Pruebas Implementadas

Para garantizar la fiabilidad del motor de decisión, se crearon varios escenarios de prueba:
*   **Prueba de Bloqueo Crítico**: Simula el caso más urgente para asegurar que el sistema lo detecta y actúa en consecuencia.
*   **Prueba de Tareas Pendientes**: Verifica que, en ausencia de bloqueos, el sistema prioriza correctamente los ajustes pendientes.
*   **Prueba de Aprobación Total**: Confirma que un plano sin problemas pasa al siguiente estado del flujo de trabajo.
*   **Prueba de Entrada Inválida**: Asegura que la validación inicial funciona y el sistema maneja datos incorrectos de forma segura.

## 4. Ejecución

El código es JavaScript puro y no necesita herramientas especiales. Se puede probar fácilmente abriendo un archivo `prueba.html` en un navegador y revisando la consola del desarrollador (F12), o ejecutándolo con Node.js.

```bash
# Si usas Node.js
node logica-general/ejercicio-017/resoluciones/evelyn-barrios/evelyn-barrios.js
```