# Plantilla de solución

## Análisis

- **Entrada:**
  - Una lista de pedidos con:
    - Nombre del cliente.
    - Cantidad de productos.
    - Precio unitario.

- **Proceso:**
  1. Recorrer la lista de pedidos.
  2. Calcular el subtotal multiplicando la cantidad por el precio unitario.
  3. Calcular el IVA del **12%** sobre el subtotal.
  4. Calcular el total a pagar sumando el subtotal y el IVA.
  5. Mostrar el resultado de cada pedido.

- **Salida:**
  - Nombre del cliente.
  - Subtotal.
  - IVA.
  - Total a pagar.

---

## Reglas identificadas

1. El subtotal se calcula mediante:

\[
\text{Subtotal}=\text{Cantidad}\times\text{Precio Unitario}
\]

2. El IVA corresponde al **12%** del subtotal.

3. El total a pagar se obtiene mediante:

\[
\text{Total}=\text{Subtotal}+\text{IVA}
\]

4. La cantidad y el precio unitario deben ser mayores que cero.

---

## Pruebas

### Caso normal

**Entrada**

```python
{
    "cliente": "Miguel",
    "cantidad": 3,
    "precio_unitario": 42
}
```

**Cálculo**

```text
Subtotal = 3 × 42 = Q126.00

IVA = 126 × 0.12 = Q15.12

Total = 126 + 15.12 = Q141.12
```

**Resultado esperado**

```text
Cliente: Miguel
Subtotal: Q126.00
IVA (12%): Q15.12
Total a pagar: Q141.12
```

---

### Caso borde

**Entrada**

```python
{
    "cliente": "Andrés",
    "cantidad": 1,
    "precio_unitario": 50
}
```

**Cálculo**

```text
Subtotal = 1 × 50 = Q50.00

IVA = 50 × 0.12 = Q6.00

Total = 50 + 6 = Q56.00
```

**Resultado esperado**

```text
Cliente: Andrés
Subtotal: Q50.00
IVA (12%): Q6.00
Total a pagar: Q56.00
```

> Este es un caso borde porque el cliente compra **una sola unidad**. El programa debe aplicar correctamente las fórmulas del subtotal, el IVA y el total, aunque la cantidad sea la mínima posible.

---

## Explicación final

La solución funciona porque simula el proceso de compra de un negocio de comida urbana utilizando operaciones aritméticas básicas. Primero calcula el **subtotal** multiplicando la cantidad por el precio unitario. Luego aplica la fórmula del **IVA del 12%** y finalmente obtiene el **total a pagar** sumando ambos valores. Esta simulación representa un cálculo común en sistemas de facturación y ventas.

---

## Sugerencia

Cuando desarrolles **simulaciones con fórmulas**, identifica primero las operaciones matemáticas que intervienen en el proceso. Realiza los cálculos en el orden correcto (subtotal, impuestos y total) para obtener resultados precisos y fáciles de verificar.