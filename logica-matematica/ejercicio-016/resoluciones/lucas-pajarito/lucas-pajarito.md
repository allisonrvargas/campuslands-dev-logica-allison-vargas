# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de proyectos de animación 3D con:
    - Nombre del proyecto.
    - Presupuesto inicial.
    - Porcentaje de descuento.

- **Proceso:**
  1. Recorrer la lista de proyectos.
  2. Calcular el monto del descuento.
  3. Restar el descuento al presupuesto inicial.
  4. Mostrar el costo final del proyecto.

- **Salida:**
  - El nombre del proyecto.
  - El presupuesto inicial.
  - El monto del descuento.
  - El costo final.

---

## Reglas identificadas

1. El descuento se calcula aplicando un porcentaje sobre el presupuesto.
2. El costo final se obtiene restando el descuento al presupuesto inicial.
3. El porcentaje de descuento debe estar entre **0% y 100%**.
4. Todos los valores monetarios se expresan en quetzales (Q).

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "nombre": "Personaje Principal",
    "presupuesto": 2500,
    "descuento": 10
}
```

**Cálculo**

```text
Descuento = 2500 × (10 ÷ 100)

Descuento = Q250

Costo final = 2500 - 250

Costo final = Q2250
```

**Resultado esperado**

```text
Proyecto: Personaje Principal
Presupuesto inicial: Q2500.00
Monto del descuento: Q250.00
Costo final: Q2250.00
```

---

### Caso borde

**Entrada**

```python
{
    "nombre": "Proyecto de Prueba",
    "presupuesto": 3000,
    "descuento": 0
}
```

**Cálculo**

```text
Descuento = 3000 × (0 ÷ 100)

Descuento = Q0

Costo final = Q3000
```

**Resultado esperado**

```text
Proyecto: Proyecto de Prueba
Presupuesto inicial: Q3000.00
Monto del descuento: Q0.00
Costo final: Q3000.00
```

> Este es un caso borde porque el porcentaje de descuento es **0%**. El programa debe calcular correctamente el costo final, manteniendo el mismo valor del presupuesto inicial.

---

## Explicación final

La solución funciona porque aplica una operación de porcentaje para calcular el descuento correspondiente a cada proyecto de animación 3D. Posteriormente, resta ese valor al presupuesto inicial para obtener el costo final. Este procedimiento permite estimar el valor real que deberá pagarse después de aplicar el descuento.

---

## Sugerencia

Cuando trabajes con **presupuestos y descuentos**, calcula primero el porcentaje de descuento sobre el valor original. Después resta ese monto al presupuesto inicial para obtener el costo final del proyecto.