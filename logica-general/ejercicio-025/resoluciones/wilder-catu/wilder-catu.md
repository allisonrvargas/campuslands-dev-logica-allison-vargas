# Clasificación por Reglas - Taller Mecánico

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Taller Mecánico.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Placa del vehículo.
- Cantidad de días que el vehículo ha permanecido en el taller.

### Ejemplo

```javascript
[
    {
        placa: "P123ABC",
        diasEnTaller: 1
    },
    {
        placa: "P456DEF",
        diasEnTaller: 3
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- La placa del vehículo.
- La cantidad de días en el taller.
- El estado del vehículo según las reglas establecidas.

### Reglas de clasificación

| Días en el taller | Estado |
|------------------:|--------|
| 0 - 2 | Reparación rápida |
| 3 - 5 | Reparación programada |
| 6 - 8 | Reparación compleja |
| 9 - 10 | Entrega prioritaria |
| Más de 10 | Requiere seguimiento |

### Ejemplo de salida

```text
=== Estado de Vehículos en el Taller Mecánico ===

Placa: P123ABC | Días en taller: 1 | Estado: Reparación rápida
Placa: P456DEF | Días en taller: 3 | Estado: Reparación programada
Placa: P789GHI | Días en taller: 6 | Estado: Reparación compleja
Placa: P321JKL | Días en taller: 9 | Estado: Entrega prioritaria
Placa: P654MNO | Días en taller: 12 | Estado: Requiere seguimiento
```

---

## Resultado esperado

Clasificar automáticamente cada vehículo según el tiempo que ha permanecido en el taller mecánico, permitiendo identificar su estado de reparación y facilitar la gestión de las entregas.