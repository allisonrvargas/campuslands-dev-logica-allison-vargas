# Clasificación por Reglas - Inventario de Motos

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Inventario de Motos.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Modelo de la motocicleta.
- Cantidad de unidades disponibles en inventario (stock).

### Ejemplo

```javascript
[
    {
        modelo: "Yamaha FZ 2.0",
        stock: 18
    },
    {
        modelo: "Honda CB190R",
        stock: 11
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Modelo de la motocicleta.
- Cantidad de unidades disponibles.
- Estado del inventario según las reglas establecidas.

### Reglas de clasificación

| Stock disponible | Clasificación |
|-----------------:|---------------|
| 15 o más | Stock alto |
| 10 - 14 | Stock suficiente |
| 5 - 9 | Stock bajo |
| 1 - 4 | Stock crítico |
| 0 | Sin existencias |

### Ejemplo de salida

```text
=== Clasificación del Inventario de Motos ===

Yamaha FZ 2.0 | Stock: 18 | Estado: Stock alto
Honda CB190R | Stock: 11 | Estado: Stock suficiente
Suzuki Gixxer 150 | Stock: 7 | Estado: Stock bajo
Bajaj Pulsar NS200 | Stock: 3 | Estado: Stock crítico
KTM Duke 200 | Stock: 0 | Estado: Sin existencias
```

---

## Resultado esperado

Clasificar automáticamente cada motocicleta según la cantidad de unidades disponibles en el inventario, permitiendo identificar rápidamente cuáles tienen disponibilidad suficiente, cuáles requieren reposición y cuáles están agotadas.