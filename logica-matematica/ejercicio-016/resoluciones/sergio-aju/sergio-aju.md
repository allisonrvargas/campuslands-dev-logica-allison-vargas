# Plantilla de solucion

## Autor: 

Sergio Ajù

## Analisis

- **Entrada:** `horasRender` (duración del proceso) y `precioPorHora` (tarifa base).
- **Proceso:** Calcular el costo bruto ($horas \times precio$) y aplicar una reducción porcentual basada en rangos de volumen de horas.
- **Salida:** Un objeto con el costo original, el ahorro obtenido, el presupuesto final y una explicación.

## Reglas identificadas

1. **Tarifa base:** El costo inicial es lineal respecto a las horas.
2. **Escala de descuentos:** - > 100 horas: 20% de descuento.
   - 50 a 100 horas: 10% de descuento.
   - < 50 horas: Sin descuento.

## Pruebas

### Caso normal

**Entrada:**
```javascript
horasRender: 60, precioPorHora: 50