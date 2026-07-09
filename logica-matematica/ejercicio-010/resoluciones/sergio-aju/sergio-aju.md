# Plantilla de solucion

## Autor: 

Sergio Ajù

## Analisis

- **Entrada:** `costoBase` (en moneda extranjera), `tasaCambio` (float) e `impuestos` (porcentaje decimal).
- **Proceso:** Multiplicar el costo base por la tasa, aplicar el porcentaje de impuestos y redondear siempre al entero superior para asegurar que el viajero cubra todos sus gastos.
- **Salida:** Un objeto con el `presupuesto_final`, la `categoria` del viaje y la `explicacion`.

## Reglas identificadas

1. **Conversión:** El costo se calcula como `(costoBase * tasaCambio) * (1 + impuestos)`.
2. **Seguridad Financiera:** Se utiliza `Math.ceil()` para redondear hacia arriba, evitando presupuestos insuficientes.
3. **Categorización:** - Presupuesto > 1000: "Lujo"
   - Presupuesto 500 - 1000: "Turista"
   - Presupuesto < 500: "Económico"

## Pruebas

### Caso normal

**Entrada:**
```javascript
costoBase: 120, tasaCambio: 4.15, impuestos: 0.12