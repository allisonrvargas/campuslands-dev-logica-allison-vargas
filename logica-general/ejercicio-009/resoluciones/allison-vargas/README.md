# Plantilla de solucion

## Analisis

- **Entrada:** Una cadena de texto con el `estadoActual` del personaje ("A salvo", "Alerta", "En peligro") y una cadena con el `evento` que ocurre ("Escucha un ruido", "Entra al sotano", "Encuentra refugio").
- **Proceso:** Evaluar mediante condicionales cómo el evento afecta al estado actual del personaje, aplicando una máquina de estados simple para calcular la transición lógica.
- **Salida:** Un objeto con el nuevo estado del personaje y una descripción o acción recomendada según la situación.

## Reglas identificadas

1. **Simulación de Peligro:** Si un personaje está "A salvo" o "Alerta" y el evento es "Entra al sotano", su estado pasa automáticamente a "En peligro".
2. **Mitigación del Riesgo:** Si el personaje está en cualquier estado y el evento es "Encuentra refugio", su estado se restablece a "A salvo".
3. **Control de Errores:** Si el evento o el estado inicial no coinciden con las opciones válidas del sistema, se retorna un estado de "Desconocido" para evitar comportamientos impredecibles en la simulación.

## Pruebas

### Caso normal

Entrada:
```javascript
const estadoActual = "Alerta";
const evento = "Entra al sotano";

Resultado esperado:

JSON
{
  "nuevoEstado": "En peligro",
  "accion": "reproducir musica de tension",
  "motivo": "Entrar al sótano en una película de miedo siempre escala el nivel de riesgo."
}
Caso borde
Entrada:

JavaScript
const estadoActual = "En peligro";
const evento = "Evento inexistente o invalido";
Resultado esperado:

JSON
{
  "nuevoEstado": "Desconocido",
  "accion": "detener simulacion",
  "motivo": "El evento ingresado no corresponde a ninguna regla de la pelicula."
}
Explicacion final
La solución es efectiva porque modela el comportamiento clásico de una película de terror mediante una estructura de control limpia basada en un diccionario de transiciones o condicionales anidados. Al validar y mapear de manera estricta los eventos permitidos, se previene que la simulación quede en un bucle infinito o asuma comportamientos incoherentes, garantizando estabilidad en el flujo y un resultado predecible para cada escena evaluada.