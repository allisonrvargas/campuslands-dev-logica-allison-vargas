# Plantilla de solucion

## Analisis

- **Entrada:** `costoTotal` (dinero del tour) y `cantidadPasajeros` (personas).
- **Proceso:** Dividir el costo entre los integrantes y aplicar una política de redondeo a dos decimales, fundamental en transacciones financieras para evitar errores de centavos.
- **Salida:** Un objeto con los datos originales, el costo calculado por persona y la explicación.

## Reglas identificadas

1. **Precisión Financiera:** Los resultados monetarios deben limitarse a dos decimales.
2. **Validación:** No se puede dividir entre cero pasajeros ni tener costos negativos.
3. **Redondeo:** Se utiliza el método estándar donde .005 sube al siguiente centavo o baja según el valor.

## Pruebas

### Caso normal

**Entrada:**
```javascript
costoTotal: 1250.50, cantidadPasajeros: 3