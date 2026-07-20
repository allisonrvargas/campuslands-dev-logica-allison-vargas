# Organización de Listas - Dibujo Digital

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Dibujo Digital.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del ilustrador.
- Cantidad de ilustraciones realizadas.
- Calificación obtenida.

### Ejemplo

```javascript
[
    {
        nombre: "Andrea",
        ilustraciones: 35,
        calificacion: 98
    },
    {
        nombre: "Carlos",
        ilustraciones: 28,
        calificacion: 90
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Un ranking de ilustradores.
- Los ilustradores organizados de mayor a menor según la calificación obtenida.
- La posición de cada ilustrador dentro de la clasificación.

### Ejemplo de salida

```text
=== Ranking de Ilustradores de Dibujo Digital ===

1. Sofía | Calificación: 100 | Ilustraciones: 42
2. Andrea | Calificación: 98 | Ilustraciones: 35
3. Valeria | Calificación: 97 | Ilustraciones: 39
4. Miguel | Calificación: 94 | Ilustraciones: 31
5. Carlos | Calificación: 90 | Ilustraciones: 28
```

---

## Regla aplicada

La lista de ilustradores se organiza en orden descendente utilizando la calificación obtenida como criterio principal de clasificación.

---

## Resultado esperado

Obtener una clasificación organizada de los ilustradores de dibujo digital según su desempeño, permitiendo identificar fácilmente a quienes obtuvieron las mejores calificaciones.