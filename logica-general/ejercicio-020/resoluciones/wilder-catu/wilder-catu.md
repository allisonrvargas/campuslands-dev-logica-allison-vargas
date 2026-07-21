# Organización de Listas - Comida Urbana

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Comida Urbana.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del puesto de comida.
- Especialidad del puesto.
- Calificación obtenida por los clientes.

### Ejemplo

```javascript
[
    {
        nombre: "Tacos El Sabor",
        especialidad: "Tacos",
        calificacion: 4.8
    },
    {
        nombre: "Burger Street",
        especialidad: "Hamburguesas",
        calificacion: 4.5
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Un ranking de puestos de comida urbana.
- Los puestos organizados de mayor a menor según la calificación.
- La posición de cada puesto dentro de la clasificación.

### Ejemplo de salida

```text
=== Ranking de Puestos de Comida Urbana ===

1. Arepas Urbanas | Especialidad: Arepas | Calificación: 4.9
2. Tacos El Sabor | Especialidad: Tacos | Calificación: 4.8
3. Pizza Rápida | Especialidad: Pizza | Calificación: 4.7
4. Burger Street | Especialidad: Hamburguesas | Calificación: 4.5
5. Hot Dog Express | Especialidad: Hot Dogs | Calificación: 4.2
```

---

## Regla aplicada

La lista de puestos de comida urbana se organiza en orden descendente utilizando la **calificación** como criterio principal de clasificación.

---

## Resultado esperado

Obtener una lista organizada de puestos de comida urbana según la valoración de los clientes, facilitando la identificación de los establecimientos con mejor calificación.