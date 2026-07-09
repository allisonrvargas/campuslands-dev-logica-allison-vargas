# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de participantes con:
    - Nombre.
    - Coordenadas iniciales (x₁, y₁).
    - Coordenadas finales (x₂, y₂).

- **Proceso:**
  1. Recorrer la lista de participantes.
  2. Calcular la distancia entre las coordenadas utilizando la fórmula de distancia.
  3. Mostrar la distancia recorrida por cada participante.

- **Salida:**
  - El nombre del participante.
  - Las coordenadas iniciales y finales.
  - La distancia recorrida.

---

## Reglas identificadas

1. Cada participante debe tener un punto inicial y un punto final.
2. La distancia se calcula mediante la fórmula:

\[
d=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}
\]

3. El resultado se expresa en metros.
4. La distancia siempre será un valor positivo.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "participante": "Miguel",
    "x1": 0,
    "y1": 0,
    "x2": 6,
    "y2": 8
}
```

**Cálculo**

```text
d = √((6-0)² + (8-0)²)

d = √(36 + 64)

d = √100

d = 10 metros
```

**Resultado esperado**

```text
Participante: Miguel
Punto inicial: (0, 0)
Punto final: (6, 8)
Distancia recorrida: 10.00 metros
```

---

### Caso borde

**Entrada**

```python
{
    "participante": "Carlos",
    "x1": 5,
    "y1": 5,
    "x2": 5,
    "y2": 5
}
```

**Cálculo**

```text
d = √((5-5)² + (5-5)²)

d = √0

d = 0 metros
```

**Resultado esperado**

```text
Participante: Carlos
Punto inicial: (5, 5)
Punto final: (5, 5)
Distancia recorrida: 0.00 metros
```

> Este es un caso borde porque el punto inicial y el punto final son iguales. En este caso, la distancia recorrida es **0 metros**, y el programa debe calcular correctamente este resultado.

---

## Explicación final

La solución funciona porque aplica la **fórmula de distancia entre dos puntos** en el plano cartesiano. Para cada participante, calcula la diferencia entre las coordenadas iniciales y finales, eleva esas diferencias al cuadrado, las suma y obtiene la raíz cuadrada del resultado. Esto permite conocer la distancia recorrida durante el salto.

---

## Sugerencia

Cuando resuelvas problemas de **coordenadas y distancia**, identifica primero el punto inicial y el punto final. Luego aplica la fórmula de distancia entre dos puntos y utiliza la raíz cuadrada para obtener la longitud real del recorrido.