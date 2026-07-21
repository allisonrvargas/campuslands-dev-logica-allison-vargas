# Plantilla de solucion

## Analisis

- Entrada: El tipo de falla que trae el vehículo por ejemplo: frenos dañados o lavado general.
El tipo de cliente por ejemplo, si tiene membresía VIP o es normal.

- Proceso: El programa tiene que ponerse a leer los datos del vehículo para ver a quién mete primero al taller. Primero revisa la falla: si es algo peligroso que pone en riesgo la vida del cliente como los frenos, va de primero. Si las fallas son iguales, entonces desempata leyendo el tipo de cliente para darle prioridad al VIP.

- Salida: Un mensaje que nos diga el orden de atención asignado prioridad alta, prioridad media" o prioridad baja y el motivo de la decisión.

## Reglas identificadas

1. Cualquier vehículo que llegue con frenos dañados tiene prioridad automática alta, sin importar qué cliente sea, porque es un riesgo de seguridad.

2. Si la falla es sencilla como un cambio de aceite o un lavado de auto, pero el cliente es "VIP", se le asigna prioridad media para atenderlo rápido por su beneficio.

3. Los servicios normales de clientes normales se van al final de la fila con prioridad baja.

## Pruebas

### Caso normal

Entrada:
falla: "frenos dañados"
cliente: "normal"

Resultado esperado:
prioridad: "Prioridad Alta"
motivo: Los frenos dañados son un peligro, se atienden de inmediato.

### Caso borde

Entrada:
falla: "cambio de luces"
cliente: "VIP"

Resultado esperado:
prioridad:"Prioridad Media"
motivo: Es una falla simple, pero se adelanta el turno por ser cliente VIP.

## Explicacion final

En esta solución el programa primero pusimos pasa por un filtro con un if para revisar las fallas graves de frenos que no pueden esperar. Si la falla no es de frenos, el código pasa a leer la tarjeta del cliente; si ve que es VIP, le da un empujón a prioridad media, y si es un cliente normal con una falla simple, lo deja en prioridad baja para respetar el orden de llegada.

## Sugerencia

Convierte cada regla del problema en una condicion clara antes de programar.
