# Simulación de Estados - Películas de Miedo

## Descripción
Simulador de comportamiento para un personaje dentro de una película de terror. Utiliza una máquina de estados para decidir la acción basándose en el entorno (habitación) y los estímulos (eventos).

## Reglas Aplicadas
- **Transiciones predefinidas:** Los estados cambian según la combinación específica de ubicación y evento.
- **Jerarquía de eventos:** El 'silencio' tiene prioridad para resetear el estado del personaje a 'explorando'.

## Cómo ejecutar
Ejecuta el archivo `nombre-apellido.js`. La función `simularReaccion` procesa el contexto actual y devuelve el nuevo estado del personaje.

## Casos Probados
- **Ruido en pasillo:** El personaje pasa a estado 'esconderse'.
- **Silencio absoluto:** El personaje regresa a su estado inicial de 'explorando'.