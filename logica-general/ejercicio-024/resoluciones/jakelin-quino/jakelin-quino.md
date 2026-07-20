## Analisis

- Entrada: Modelo de la moto, kilometraje (número) y estado (nueva o usada).
- Proceso: Verificar si la moto es "nueva" o si su kilometraje es menor a 10,000.
- Salida: La acción a realizar (venta o mantenimiento) y una justificación.

## Reglas identificadas

1. Si la moto es "nueva", se pone a la venta inmediatamente.
2. Si la moto es "usada" pero tiene menos de 10,000 km, también se pone a la venta.
3. En cualquier otro caso, debe ir a mantenimiento.

## Pruebas

### Caso normal

Entrada:
modelo: "Sport 600"
kilometraje: 5000
estado: "usada"

Resultado esperado:
accion: poner a la venta
motivo: La moto cumple con los estandares de calidad.

### Caso borde

Entrada:
modelo: "City 125"
kilometraje: 15000
estado: "usada"

Resultado esperado:
accion: enviar a mantenimiento
motivo: El kilometraje es muy alto para la venta directa.

## Explicacion final

Mi solucion funciona utilizando un operador lógico 'OR' (||) dentro de un condicional 'if'. Esto permite evaluar dos condiciones diferentes de éxito simultáneamente: que la moto sea nueva o que tenga poco uso (bajo kilometraje). Si ninguna de estas es verdadera, el programa ejecuta el bloque 'else', enviando la moto a mantenimiento de forma automática.