# Organización de Listas - Kickboxing

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Kickboxing.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del peleador.
- Cantidad de victorias.
- Cantidad de derrotas.

Ejemplo:

```javascript
[
    {
        nombre: "Carlos",
        victorias: 15,
        derrotas: 2
    },
    {
        nombre: "Luis",
        victorias: 10,
        derrotas: 5
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Un ranking organizado de peleadores.
- Los peleadores ordenados de mayor a menor según la cantidad de victorias.
- La posición de cada peleador dentro de la lista.

Ejemplo de salida:

```text
=== Ranking de Peleadores de Kickboxing ===

1. Andrea - Victorias: 18 | Derrotas: 1
2. Carlos - Victorias: 15 | Derrotas: 2
3. Luis - Victorias: 10 | Derrotas: 5
4. Miguel - Victorias: 8 | Derrotas: 4
```

---

## Regla aplicada

La lista de peleadores se organiza de forma descendente utilizando la cantidad de victorias como criterio principal.

---

## Resultado esperado

Obtener una lista ordenada que permita identificar fácilmente a los peleadores con mejor desempeño en el torneo de kickboxing.