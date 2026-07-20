## Análisis
- **Entrada**: Costo base del proyecto, porcentaje de descuento y límite para aplicar el beneficio.
- **Proceso**: Comparo si el costo supera el límite. Si es así, resto el porcentaje calculado al total.
- **Salida**: Costo final tras aplicar o no el descuento.

## Reglas aplicadas
- Si `costo > limite`, aplicar descuento.
- $Total = Costo - (Costo \times porcentaje)$.

## Pruebas
- **Caso Normal**: Costo 2000 (superior a 1500) -> Descuento aplicado: 1800.
- **Caso Borde**: Costo 1000 (inferior a 1500) -> Sin descuento: 1000.

## Explicación
Para este problema, utilicé una condición `if` para verificar si el cliente califica para el descuento. El cálculo es multiplicar el precio por el porcentaje y restarlo del total.