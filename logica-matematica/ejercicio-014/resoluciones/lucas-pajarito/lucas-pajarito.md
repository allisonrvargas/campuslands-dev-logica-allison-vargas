# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de tatuajes con:
    - Nombre del cliente.
    - Largo del diseño.
    - Ancho del diseño.

- **Proceso:**
  1. Recorrer la lista de tatuajes.
  2. Calcular el área utilizando la fórmula:
     
     **Área = largo × ancho**
     
  3. Calcular el perímetro utilizando la fórmula:
     
     **Perímetro = 2 × (largo + ancho)**
     
  4. Mostrar los resultados.

- **Salida:**
  - El nombre del cliente.
  - El área del tatuaje.
  - El perímetro del tatuaje.

---

## Reglas identificadas

1. El largo y el ancho deben ser valores positivos.
2. El área se calcula multiplicando el largo por el ancho.
3. El perímetro se calcula sumando el largo y el ancho y multiplicando el resultado por dos.
4. Los resultados se expresan en centímetros.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "cliente": "Carlos",
    "largo": 12,
    "ancho": 8
}
```

**Cálculo**

```text
Área = 12 × 8 = 96 cm²

Perímetro = 2 × (12 + 8)

Perímetro = 2 × 20

Perímetro = 40 cm
```

**Resultado esperado**

```text
Cliente: Carlos
Área: 96 cm²
Perímetro: 40 cm
```

---

### Caso borde

**Entrada**

```python
{
    "cliente": "Laura",
    "largo": 0,
    "ancho": 10
}
```

**Cálculo**

```text
Área = 0 × 10 = 0 cm²

Perímetro = 2 × (0 + 10)

Perímetro = 20 cm
```

**Resultado esperado**

```text
Cliente: Laura
Área: 0 cm²
Perímetro: 20 cm
```

> Este es un caso borde porque una de las dimensiones es **0 cm**. El área resulta igual a **0**, mientras que el perímetro se calcula correctamente utilizando la fórmula correspondiente.

---

## Explicación final

La solución funciona porque aplica dos fórmulas geométricas básicas. Primero calcula el **área** multiplicando el largo por el ancho del diseño del tatuaje. Luego calcula el **perímetro** sumando ambos lados y multiplicando el resultado por dos. Estos cálculos permiten estimar el tamaño del diseño y la longitud de su contorno.

---

## Sugerencia

Cuando resuelvas problemas de **áreas y perímetros**, identifica primero la figura geométrica que representa el objeto. Después aplica la fórmula correspondiente para calcular el área y el perímetro utilizando las medidas proporcionadas.