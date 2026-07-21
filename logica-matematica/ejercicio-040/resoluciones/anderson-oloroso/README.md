# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con pedidos de un negocio de comida urbana.
  - Cada pedido contiene:
    - `cliente`: persona que realiza la compra.
    - `productos`: lista de alimentos solicitados.
    - `tipoEntrega`: modalidad de entrega.
    - `metodoPago`: forma de pago utilizada.

  - Cada producto contiene:
    - `nombre`: nombre del producto.
    - `precio`: valor unitario.
    - `cantidad`: unidades solicitadas.

- **Proceso:**
  - Validar que cada pedido tenga información completa.
  - Calcular el subtotal de la compra.
  - Calcular descuentos según reglas del negocio.
  - Agregar costo de entrega cuando corresponda.
  - Obtener el valor final del pedido.
  - Acumular ventas y descuentos generados.

- **Salida:**
  - Cantidad de pedidos procesados.
  - Total de descuentos aplicados.
  - Total de ventas.
  - Detalle individual de cada pedido.

## Reglas identificadas

### 1. Validación del pedido

Un pedido es válido si:

\[
Cliente \neq vacío
\]

\[
CantidadProductos > 0
\]

\[
TipoEntrega \neq vacío
\]

\[
MetodoPago \neq vacío
\]


### 2. Cálculo del subtotal

\[
Subtotal =
\sum(PrecioProducto \times Cantidad)
\]


### 3. Reglas de descuentos


#### Compra mayor o igual a 50000

Si:

\[
Subtotal \geq 50000
\]

Se aplica:

\[
10\%
\]


#### Compra de 5 o más productos

Si:

\[
CantidadProductos \geq 5
\]

Se aplica:

\[
5\%
\]


#### Pago digital

Si:

\[
MetodoPago = Digital
\]

Se aplica:

\[
3\%
\]


### 4. Límite de descuento

El descuento máximo permitido es:

\[
15\%
\]


### 5. Costo de entrega

Si:

\[
TipoEntrega = Domicilio
\]

Entonces:

\[
CostoEntrega = 5000
\]


### 6. Total final

\[
Total =
Subtotal - Descuento + Entrega
\]


## Pruebas

### Caso normal

Entrada:

```javascript
[
  {
    cliente: "Carlos",
    tipoEntrega: "Domicilio",
    metodoPago: "Digital",
    productos: [
      {
        nombre: "Hamburguesa",
        precio: 15000,
        cantidad: 2
      },
      {
        nombre: "Papas",
        precio: 8000,
        cantidad: 3
      }
    ]
  }
]
```

Resultado esperado:

```javascript
{
  totalPedidos: 1,
  pedidos: [
    {
      cliente: "Carlos",
      subtotal: "54000.00",
      descuentoAplicado: "15%",
      costoEntrega: 5000,
      totalPagar: "50800.00"
    }
  ]
}
```


### Caso borde

Entrada:

```javascript
[
  {
    cliente: "",
    tipoEntrega: "Domicilio",
    metodoPago: "Digital",
    productos: []
  }
]
```

Resultado esperado:

```javascript
{
  cliente: "",
  estado: "Pedido inválido"
}
```


## Explicacion final

La solución representa una simulación de pedidos para un negocio de comida urbana. El programa calcula costos, aplica descuentos y determina el valor final de cada compra.

La lógica utiliza diferentes condiciones comerciales para simular un sistema real de facturación, donde influyen el monto comprado, la cantidad de productos y el método de pago.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y fórmulas matemáticas para procesar múltiples pedidos y generar resultados verificables.