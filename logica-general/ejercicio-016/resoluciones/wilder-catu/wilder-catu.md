# Organización de Listas - Animación 3D

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Animación 3D.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del animador.
- Cantidad de proyectos de animación 3D realizados.
- Calificación obtenida.

### Ejemplo

```javascript
[
    {
        nombre: "Andrea",
        proyectos: 18,
        calificacion: 97
    },
    {
        nombre: "Carlos",
        proyectos: 12,
        calificacion: 89
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Un ranking de animadores 3D.
- Los participantes organizados de mayor a menor según la calificación obtenida.
- La posición de cada animador dentro de la clasificación.

### Ejemplo de salida

```text
=== Ranking de Animadores 3D ===

1. Sofía | Calificación: 100 | Proyectos: 25
2. Andrea | Calificación: 97 | Proyectos: 18
3. Miguel | Calificación: 95 | Proyectos: 20
4. Valeria | Calificación: 92 | Proyectos: 16
5. Carlos | Calificación: 89 | Proyectos: 12
```

---

## Regla aplicada

La lista de animadores se organiza en orden descendente utilizando la calificación obtenida como criterio principal para determinar el ranking.

---

## Resultado esperado

Obtener una clasificación organizada de los animadores 3D según su desempeño en los proyectos, facilitando la identificación de quienes obtuvieron las mejores calificaciones.