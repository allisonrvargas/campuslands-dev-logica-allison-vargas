## Analisis

- Entrada: Nombre del destino, un booleano (requiereVisa) y un booleano (tieneVisa).
- Proceso: Verificar si las condiciones de viaje se cumplen comparando los requisitos contra el estado del pasajero.
- Salida: El estado final del itinerario y un mensaje aclaratorio.

## Reglas identificadas

1. Si el destino requiere visa y el pasajero no cuenta con ella, el viaje es "bloqueado".
2. En cualquier otro caso (si no requiere visa, o si la requiere y el pasajero la tiene), el viaje es "aprobado".

## Pruebas

### Caso normal

Entrada:
destino: "Francia"
requiereVisa: true
tieneVisa: true

Resultado esperado:
estado: aprobado
mensaje: El itinerario está listo para el viaje.

### Caso borde

Entrada:
destino: "Japon"
requiereVisa: true
tieneVisa: false

Resultado esperado:
estado: bloqueado
mensaje: No se puede viajar: se requiere visa obligatoria.

## Explicacion final

Mi solucion utiliza una estructura 'if' para evaluar una condición compuesta. Si la regla "requiere visa" es verdadera y la posesión "tiene visa" es falsa, el programa marca el estado como "bloqueado" inmediatamente. Si no se cumple esta combinación negativa, el programa asume que el viaje es seguro y marca el itinerario como "aprobado", siguiendo la lógica de validación de instrucciones.