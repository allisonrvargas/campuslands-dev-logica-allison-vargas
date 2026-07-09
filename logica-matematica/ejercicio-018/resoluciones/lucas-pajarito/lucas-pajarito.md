# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de soldadores con:
    - Nombre.
    - Puntaje obtenido en la evaluación.

- **Proceso:**
  1. Obtener el puntaje mínimo y el puntaje máximo.
  2. Aplicar la fórmula de normalización para cada puntaje.
  3. Mostrar el puntaje original y el puntaje normalizado.

- **Salida:**
  - El nombre del soldador.
  - El puntaje original.
  - El puntaje normalizado.

---

## Reglas identificadas

1. Todos los puntajes deben ser valores numéricos.
2. La normalización transforma los puntajes a una escala de **0 a 100**.
3. Se utiliza la fórmula:

\[
\text{Puntaje normalizado} =
\frac{\text{Puntaje} - \text{Mínimo}}
{\text{Máximo} - \text{Mínimo}}
\times 100
\]

4. El puntaje más bajo corresponde a **0** y el más alto a **100**.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Laura",
    "puntaje": 90
}
```

**Cálculo**

```text
Puntaje mínimo = 60

Puntaje máximo = 95

Puntaje normalizado = ((90 - 60) ÷ (95 - 60)) × 100

Puntaje normalizado = (30 ÷ 35) × 100

Puntaje normalizado ≈ 85.71
```

**Resultado esperado**

```text
Soldador: Laura
Puntaje original: 90
Puntaje normalizado: 85.71
```

---

### Caso borde

**Entrada**

```python
{
    "nombre": "Miguel",
    "puntaje": 60
}
```

**Cálculo**

```text
Puntaje normalizado = ((60 - 60) ÷ (95 - 60)) × 100

Puntaje normalizado = 0
```

**Resultado esperado**

```text
Soldador: Miguel
Puntaje original: 60
Puntaje normalizado: 0.00
```

> Este es un caso borde porque el puntaje corresponde al **valor mínimo** del conjunto de datos. Al aplicar la fórmula de normalización, el resultado debe ser **0**, representando el límite inferior de la escala.

---

## Explicación final

La solución funciona porque utiliza la fórmula de **normalización Min-Max**, que convierte todos los puntajes a una escala común de **0 a 100**. Primero identifica el puntaje mínimo y máximo del conjunto de datos, y luego calcula el valor normalizado para cada soldador. Esto permite comparar los resultados de manera uniforme, independientemente de la escala original.

---

## Sugerencia

Cuando trabajes con **normalización de puntajes**, identifica primero el valor mínimo y el valor máximo del conjunto de datos. Después aplica la fórmula de normalización a cada elemento para obtener valores comparables dentro de una misma escala.