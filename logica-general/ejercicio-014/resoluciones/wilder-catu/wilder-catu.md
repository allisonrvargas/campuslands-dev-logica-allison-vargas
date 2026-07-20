# Organización de Listas - Tatuajes

## Contexto

Estás trabajando como estudiante de Campuslands en un reto de Tatuajes.

## Objetivo

Crear una solución que reciba datos, aplique reglas y entregue un resultado verificable.

---

## 2. Identifica las entradas

Los datos que recibe la solución son:

- Nombre del tatuador.
- Especialidad del tatuador.
- Cantidad de clientes atendidos.

### Ejemplo

```javascript
[
    {
        nombre: "Laura",
        especialidad: "Realismo",
        clientesAtendidos: 120
    },
    {
        nombre: "Carlos",
        especialidad: "Tradicional",
        clientesAtendidos: 95
    }
]
```

---

## 3. Identifica las salidas

La solución debe entregar:

- Un ranking de tatuadores.
- Los tatuadores organizados de mayor a menor según la cantidad de clientes atendidos.
- La posición de cada tatuador dentro de la clasificación.

### Ejemplo de salida

```text
=== Ranking de Tatuadores ===

1. Andrea | Especialidad: Minimalista | Clientes atendidos: 150
2. Sofía | Especialidad: Acuarela | Clientes atendidos: 135
3. Laura | Especialidad: Realismo | Clientes atendidos: 120
4. Miguel | Especialidad: Blackwork | Clientes atendidos: 110
5. Carlos | Especialidad: Tradicional | Clientes atendidos: 95
```

---

## Regla aplicada

La lista de tatuadores se organiza en orden descendente utilizando la cantidad de clientes atendidos como criterio principal de clasificación.

---

## Resultado esperado

Obtener una clasificación organizada de los tatuadores según la cantidad de clientes atendidos, facilitando la identificación de quienes tienen mayor experiencia en el estudio de tatuajes.