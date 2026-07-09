# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de categorías con:
    - Nombre de la categoría.
    - Cantidad de peleadores inscritos.

- **Proceso:**
  1. Leer la cantidad de peleadores.
  2. Aplicar la fórmula de combinaciones simples.
  3. Calcular la cantidad de posibles enfrentamientos entre dos competidores.
  4. Mostrar el resultado para cada categoría.

- **Salida:**
  - La categoría.
  - El número de peleadores.
  - La cantidad de posibles enfrentamientos.

---

## Reglas identificadas

1. Cada enfrentamiento se realiza entre **2 peleadores**.
2. Un enfrentamiento entre A y B es igual que entre B y A.
3. Se utiliza la fórmula de combinaciones:

\[
C(n,r)=\frac{n!}{r!(n-r)!}
\]

donde:

- **n** = número de peleadores.
- **r = 2**.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "categoria": "Peso Ligero",
    "peleadores": 8
}
```

**Cálculo**

```text
C(8,2)

= 8! / (2! * 6!)

= (8 × 7) / 2

= 28
```

**Resultado esperado**

```text
Categoría: Peso Ligero

Número de peleadores: 8

Posibles enfrentamientos: 28
```

---

### Caso borde

**Entrada**

```python
{
    "categoria": "Peso Pesado",
    "peleadores": 2
}
```

**Cálculo**

```text
C(2,2)=1
```

**Resultado esperado**

```text
Categoría: Peso Pesado

Número de peleadores: 2

Posibles enfrentamientos: 1
```

> Este es un caso borde porque únicamente existen dos peleadores inscritos. Solo puede realizarse un enfrentamiento posible.

---

## Explicación final

La solución funciona porque utiliza la fórmula de **combinaciones simples** para calcular cuántos enfrentamientos diferentes pueden organizarse entre los peleadores de una categoría. Como el orden de los participantes no importa, se aplica la fórmula \(C(n,2)\), obteniendo el número total de combates posibles sin repetir enfrentamientos.

---

## Sugerencia

Antes de resolver un problema de **conteo combinatorio**, identifica si el orden de los elementos influye en el resultado. Si el orden **no importa**, utiliza la fórmula de **combinaciones** para calcular correctamente la cantidad de posibles agrupaciones o enfrentamientos.