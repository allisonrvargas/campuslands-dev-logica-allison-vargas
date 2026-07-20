# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa el inventario de motos.
  - Cada moto contiene:
    - `modelo`: nombre o referencia del vehículo.
    - `precio`: valor comercial de la moto.

- **Proceso:**
  - Validar que exista al menos una moto registrada.
  - Recorrer el inventario utilizando un ciclo.
  - Verificar que todos los precios sean válidos.
  - Acumular el valor total del inventario.
  - Comparar los precios para identificar la moto más costosa.
  - Clasificar cada moto dentro de un rango de precios.

- **Salida:**
  - Un objeto con:
    - Cantidad de motos registradas.
    - Valor total del inventario.
    - Moto con el precio más alto.
    - Precio máximo encontrado.
    - Clasificación individual de cada moto.

## Reglas identificadas

1. El inventario debe contener al menos una moto.
2. Todos los precios deben ser mayores que cero.
3. El valor total del inventario se obtiene sumando el precio de todas las motos:

\[
Valor\ Total=\sum Precio_i
\]

4. La moto más costosa corresponde al mayor precio registrado:

\[
Precio_{max}=max(Precio_i)
\]

5. La clasificación depende del rango de precios:
   - **$20,000 o más** → **Premium**.
   - **Entre $12,000 y $19,999** → **Gama Media**.
   - **Menor de $12,000** → **Económica**.

6. Si algún precio es inválido, el sistema debe detener el proceso y devolver un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const motos = [
  {
    modelo: "Yamaha MT-09",
    precio: 18500
  },
  {
    modelo: "Honda CB500F",
    precio: 9800
  },
  {
    modelo: "Ducati Panigale V4",
    precio: 28500
  }
];
```

Resultado esperado:

```javascript
{
  motosRegistradas: 3,
  valorTotalInventario: 56800,
  motoMasCara: "Ducati Panigale V4",
  precioMaximo: 28500,
  clasificacion: [
    {
      modelo: "Yamaha MT-09",
      precio: 18500,
      rango: "Gama Media"
    },
    {
      modelo: "Honda CB500F",
      precio: 9800,
      rango: "Económica"
    },
    {
      modelo: "Ducati Panigale V4",
      precio: 28500,
      rango: "Premium"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const motos = [
  {
    modelo: "Moto Inválida",
    precio: -5000
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "El precio de las motos debe ser mayor que cero."
}
```

## Explicacion final

La solución analiza un inventario de motos utilizando operaciones de búsqueda de máximos y clasificación por rangos. Primero valida que los datos sean correctos y que todos los precios sean mayores que cero.

Posteriormente recorre el inventario mediante un ciclo para acumular el valor total, identificar la moto con el precio más alto y clasificar cada vehículo según su rango de precio. Estas operaciones se realizan en un solo recorrido, haciendo el algoritmo eficiente.

Finalmente se genera un resumen con las estadísticas principales del inventario, permitiendo conocer el valor total, el vehículo más costoso y la categoría de cada moto. La solución combina ciclos, acumuladores, comparaciones y estructuras condicionales para producir un resultado verificable.