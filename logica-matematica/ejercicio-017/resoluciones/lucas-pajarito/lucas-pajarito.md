# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de proyectos de arquitectura 3D con:
    - Nombre del proyecto.
    - Puntaje obtenido.

- **Proceso:**
  1. Recorrer la lista de proyectos.
  2. Sumar todos los puntajes.
  3. Identificar el puntaje más alto y el más bajo.
  4. Calcular el promedio de los puntajes.
  5. Mostrar las estadísticas del ranking.

- **Salida:**
  - El promedio de los puntajes.
  - El puntaje más alto.
  - El puntaje más bajo.

---

## Reglas identificadas

1. Cada proyecto debe tener un puntaje numérico.
2. El promedio se obtiene dividiendo la suma de los puntajes entre la cantidad de proyectos.
3. El puntaje más alto corresponde al valor máximo registrado.
4. El puntaje más bajo corresponde al valor mínimo registrado.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Edificio Inteligente",
    "puntaje": 95
}
```

**Cálculo**

```text
Suma = 95 + 88 + 92 + 85 + 90 = 450

Promedio = 450 ÷ 5 = 90

Puntaje máximo = 95

Puntaje mínimo = 85
```

**Resultado esperado**

```text
Puntaje promedio: 90.00
Puntaje más alto: 95
Puntaje más bajo: 85
```

---

### Caso borde

**Entrada**

```python
proyectos = [
    {
        "nombre": "Proyecto Único",
        "puntaje": 100
    }
]
```

**Cálculo**

```text
Promedio = 100 ÷ 1 = 100

Máximo = 100

Mínimo = 100
```

**Resultado esperado**

```text
Puntaje promedio: 100.00
Puntaje más alto: 100
Puntaje más bajo: 100
```

> Este es un caso borde porque únicamente existe un proyecto. En este escenario, el promedio, el puntaje máximo y el puntaje mínimo tienen el mismo valor.

---

## Explicación final

La solución funciona porque aplica operaciones estadísticas básicas sobre los puntajes de los proyectos. Recorre la lista para calcular la suma total, identificar el valor máximo y el mínimo, y finalmente obtiene el promedio dividiendo la suma entre la cantidad de proyectos. Estas operaciones permiten analizar el rendimiento general del ranking.

---

## Sugerencia

Cuando resuelvas problemas de **estadísticas de ranking**, utiliza un acumulador para sumar los valores y variables auxiliares para almacenar el mayor y el menor puntaje. Al finalizar el recorrido, calcula el promedio para obtener una visión general de los resultados.