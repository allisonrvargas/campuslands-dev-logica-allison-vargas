# Plantilla de solucion

## Autor

Sergio Ajú

## Analisis

- **Entrada:** `kmh` (velocidad en kilómetros por hora).
- **Proceso:** Aplicar factores de conversión constantes para obtener equivalencias en otras unidades (mph y m/s) y clasificar el vehículo según su velocidad punta.
- **Salida:** Un objeto con las velocidades convertidas, la categoría del auto y una explicación.

## Reglas identificadas

1. **Conversión MPH:** Multiplicar por $0.621371$.
2. **Conversión M/S:** Multiplicar por $0.277778$.
3. **Categorización:** - >= 400 km/h: "Hiperdeportivo Extremo"
   - 300 - 399 km/h: "Superdeportivo"
   - < 300 km/h: "Deportivo Estándar"

## Pruebas

### Caso normal

**Entrada:**
```javascript
kmh: 350