# Organización de Listas - Fórmulas Químicas

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Fórmulas Químicas.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del compuesto químico.
- Fórmula química.
- Masa molar del compuesto.

### Ejemplo

```javascript
[
    {
        nombre: "Agua",
        formula: "H2O",
        masaMolar: 18.02
    },
    {
        nombre: "Glucosa",
        formula: "C6H12O6",
        masaMolar: 180.16
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Una lista organizada de los compuestos químicos.
- Los compuestos ordenados de mayor a menor según su masa molar.
- La posición de cada compuesto dentro de la lista.

### Ejemplo de salida

```text
=== Lista de Fórmulas Químicas por Masa Molar ===

1. Glucosa (C6H12O6) | Masa molar: 180.16 g/mol
2. Ácido Sulfúrico (H2SO4) | Masa molar: 98.08 g/mol
3. Dióxido de Carbono (CO2) | Masa molar: 44.01 g/mol
4. Agua (H2O) | Masa molar: 18.02 g/mol
5. Amoníaco (NH3) | Masa molar: 17.03 g/mol
```

---

## Regla aplicada

La lista de compuestos químicos se organiza en orden descendente utilizando la **masa molar** como criterio principal de clasificación.

---

## Resultado esperado

Obtener una lista organizada de fórmulas químicas según su masa molar, facilitando la comparación entre los diferentes compuestos.