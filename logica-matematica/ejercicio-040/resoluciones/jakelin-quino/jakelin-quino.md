## Análisis
- **Entrada**: Precio por producto, cantidad solicitada y costo de envío.
- **Proceso**: Multiplico el precio por la cantidad y sumo la tarifa fija de envío.
- **Salida**: El valor total de la cuenta.

## Reglas aplicadas
- $Total = (Precio \times Cantidad) + TarifaEnvio$.

## Pruebas
- **Caso Normal**: 5 USD cada uno, 4 unidades, 2.50 envío -> 22.50 USD.
- **Caso Borde**: 0 unidades -> 2.50 USD (solo se cobra el envío).

## Explicación 
Para simular el costo, uso la fórmula matemática de subtotal más cargo fijo. Es una forma sencilla de representar un sistema de ventas donde siempre hay un costo base independientemente de la cantidad comprada.