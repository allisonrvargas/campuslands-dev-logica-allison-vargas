# Estrategia de Selección de Comida Urbana - CampusBurger

## Descripción
Este proyecto resuelve el reto de lógica sobre la priorización de pedidos en un entorno de comida urbana. El objetivo es determinar qué pedido debe procesarse primero basándose en reglas de negocio específicas (urgencia y estado del pedido).

## Análisis
- **Entrada:** Un arreglo de objetos que representan pedidos, cada uno con un `id`, `estado` y `tipo`.
- **Proceso:** Se aplica una función de ordenamiento que asigna un peso lógico a cada pedido según sus atributos, priorizando los pedidos "urgentes" y "pendientes".
- **Salida:** El ID del pedido que debe ser atendido a continuación y el motivo de la selección.

## Reglas Identificadas
1. **Prioridad de Tipo:** Los pedidos marcados como `urgente` tienen precedencia absoluta sobre los `normales`.
2. **Prioridad de Estado:** Dentro de la misma categoría de tipo, los pedidos `pendiente` son prioritarios sobre `en-preparacion` y `listo`.
3. **Validación:** Si la lista está vacía, el sistema retorna un aviso de falta de tareas.

## Cómo ejecutar la solución
1. Asegúrate de tener instalado Python 3.x (o Node.js si usas la versión .js).
2. Navega a la carpeta: `cd resoluciones/nombre-apellido/`.
3. Ejecuta el archivo principal: `python nombre-apellido.py`.
4. El script imprimirá automáticamente el pedido seleccionado basado en los datos de entrada definidos.

## Casos de Prueba

### Caso Normal
- **Entrada:** `[{"id": 1, "estado": "listo", "tipo": "normal"}, {"id": 2, "estado": "pendiente", "tipo": "urgente"}]`
- **Resultado:** Acción: Procesar pedido ID 2.
- **Explicación:** El pedido 2 es urgente y está pendiente, lo cual es la máxima prioridad.

### Caso Borde (Lista vacía)
- **Entrada:** `[]`
- **Resultado:** Acción: No hay pedidos en cola.
- **Explicación:** El sistema valida correctamente la ausencia de elementos para evitar errores de ejecución.

## Explicación Final
La solución utiliza un sistema de **pesos ponderados**. Al convertir las reglas en valores numéricos (prioridad 0 a N), logramos que la computadora ordene la lista de forma eficiente. Esto evita el uso de múltiples condicionales `if` anidados, haciendo que el código sea más legible y escalable.