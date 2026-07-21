# Plantilla de solucion

## Analisis

- Entrada: El destino de viaje China, el tipo de equipaje que lleva maleta de bodega y la instrucción del boleto solo mochila.  

- Proceso: El programa lee la guía de instrucciones de la aerolínea. Revisa el tipo de equipaje que lleva el turista frente a lo que compro y calcula si tiene que pagar una multa o si tiene equipaje prohibido. 

- Salida: El resultado del chequeo de viaje y el costo extra o alerta. 

## Reglas identificadas

1. Si la instrucción del boleto dice solo mochila y el turista trae una maleta grande, se lee como incumplimiento y se le cobra una multa de equipaje. 

2. Si el turista cumple la instrucción de equipaje, su costo extra es cero y pasa directo a la sala de abordaje. 

3. Si el turista intenta pasar con un objeto marcado como prohibido en sus instrucciones, el estado cambia a retenido por seguridad sin importar el tamaño de la maleta.

## Pruebas

### Caso normal

Entrada: destino: "China", equipajeLlevado: “maleta de bodega”, instruccionBoleto: “solo mochila” 

Resultado esperado: resultado: “Cobrar multa”, equipajeExtra: “$50 USD” 

### Caso borde

Entrada: destino: "China", equipajeLlevado: “objeto prohibido”, instruccionBoleto: “solo mochila” 

Resultado esperado: resultado: “Retenido por seguridad”, equipajeExtra: “No aplica – revisión en counter” 

## Explicacion final

El sistema sigue la lectura de maneta estricta las instrucciones del viaje. Primero filtra si hay algún objeto prohibido para bloquear el paso por seguridad; si todo esta limpio de peligro, pasa a comparar los tamaños de equipaje para cobrar la multa justa si el cliente no leyó bien las reglas de su boleto. 

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
