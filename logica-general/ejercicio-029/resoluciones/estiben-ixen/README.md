## Analisis

- Entrada: Un objeto `personaje` (con estado y visibilidad) y un string `evento` (la acción externa que ocurre).
- Proceso: Evaluar las reglas de transición de estados mediante una estructura de control que decide el nuevo estado del personaje.
- Salida: El nuevo estado resultante del personaje tras el evento.

## Reglas identificadas

1. Si el personaje ya está "eliminado", no puede cambiar de estado.
2. Un evento de "ruido" coloca al personaje en estado "en peligro".
3. Un evento de "ataque" resulta en estado "eliminado".
4. Un evento de "luz" resetea al personaje a "a salvo".
5. Si el tiempo pasa mientras está en "en peligro", el personaje termina "eliminado".

## Pruebas

### Caso normal

Entrada:
personaje: { estado: "a salvo" }, evento: "ruido"

Resultado esperado:
"en peligro"

### Caso borde

Entrada:
personaje: { estado: "eliminado" }, evento: "luz"

Resultado esperado:
"eliminado" (No puede revivir tras el evento)

## Explicacion final

La solución utiliza una máquina de estados simplificada. La lógica evalúa primero el estado actual del personaje para prevenir cambios inválidos (como revivir un personaje eliminado) y luego aplica la transición correspondiente según el evento recibido, asegurando la consistencia narrativa de la simulación.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.