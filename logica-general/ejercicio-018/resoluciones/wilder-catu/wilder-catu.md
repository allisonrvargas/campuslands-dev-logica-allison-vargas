# Organización de Listas - Soldadura

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Soldadura.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del soldador.
- Cantidad de piezas soldadas.
- Calificación de calidad del trabajo realizado.

### Ejemplo

```javascript
[
    {
        nombre: "Carlos",
        piezasSoldadas: 120,
        calidad: 96
    },
    {
        nombre: "Andrea",
        piezasSoldadas: 145,
        calidad: 99
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Un ranking de soldadores.
- Los soldadores organizados de mayor a menor según la calificación de calidad.
- La posición de cada soldador dentro de la clasificación.

### Ejemplo de salida

```text
=== Ranking de Soldadores ===

1. Andrea | Calidad: 99 | Piezas soldadas: 145
2. Sofía | Calidad: 97 | Piezas soldadas: 125
3. Carlos | Calidad: 96 | Piezas soldadas: 120
4. Laura | Calidad: 94 | Piezas soldadas: 130
5. Miguel | Calidad: 91 | Piezas soldadas: 110
```

---

## Regla aplicada

La lista de soldadores se organiza en orden descendente utilizando la calificación de calidad como criterio principal para establecer el ranking.

---

## Resultado esperado

Obtener una clasificación organizada de los soldadores según la calidad de su trabajo, permitiendo identificar rápidamente a quienes obtuvieron el mejor desempeño.