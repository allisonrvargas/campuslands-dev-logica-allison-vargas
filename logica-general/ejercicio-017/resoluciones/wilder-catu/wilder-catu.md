# Organización de Listas - Arquitectura 3D

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Arquitectura 3D.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del arquitecto.
- Cantidad de proyectos de arquitectura 3D realizados.
- Puntuación obtenida en la evaluación.

### Ejemplo

```javascript
[
    {
        nombre: "Andrea",
        proyectos: 15,
        puntuacion: 96
    },
    {
        nombre: "Carlos",
        proyectos: 12,
        puntuacion: 89
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Un ranking de arquitectos 3D.
- Los participantes organizados de mayor a menor según la puntuación obtenida.
- La posición de cada arquitecto dentro de la clasificación.

### Ejemplo de salida

```text
=== Ranking de Arquitectos 3D ===

1. Sofía | Puntuación: 99 | Proyectos: 20
2. Andrea | Puntuación: 96 | Proyectos: 15
3. Miguel | Puntuación: 94 | Proyectos: 18
4. Valeria | Puntuación: 91 | Proyectos: 16
5. Carlos | Puntuación: 89 | Proyectos: 12
```

---

## Regla aplicada

La lista de arquitectos se organiza en orden descendente utilizando la puntuación obtenida como criterio principal de clasificación.

---

## Resultado esperado

Obtener una clasificación organizada de los arquitectos 3D según su desempeño en los proyectos, permitiendo identificar fácilmente a quienes alcanzaron las mejores puntuaciones.