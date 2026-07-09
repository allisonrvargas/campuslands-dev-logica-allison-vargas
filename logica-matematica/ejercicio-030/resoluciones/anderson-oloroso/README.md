# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que contiene información de viajes turísticos.
  - Cada viaje contiene:
    - `destino`: lugar turístico seleccionado.
    - `costoBase`: precio inicial del viaje.
    - `descuento`: porcentaje de descuento aplicado.

- **Proceso:**
  - Validar que exista al menos un viaje registrado.
  - Verificar que el costo sea positivo y que el descuento esté dentro del rango permitido.
  - Calcular el costo final aplicando descuento:

\[
CostoFinal = CostoBase - (CostoBase \times \frac{Descuento}{100})
\]

  - Redondear los resultados utilizando dos decimales para mantener precisión monetaria.
  - Acumular los costos finales.
  - Calcular el promedio de costos.
  - Identificar el viaje con mayor costo final.

- **Salida:**
  - Un objeto con:
    - Cantidad de viajes procesados.
    - Costo total.
    - Promedio de costo.
    - Viaje más costoso.
    - Lista de resultados con precios ajustados.

## Reglas identificadas

1. Debe existir al menos un viaje registrado.
2. El costo base debe ser mayor que cero.
3. El porcentaje de descuento debe cumplir:

\[
0 \leq Descuento \leq 100
\]

4. El descuento se aplica mediante una proporción porcentual:

\[
DescuentoAplicado = CostoBase \times \frac{Descuento}{100}
\]

5. El costo final debe redondearse a dos posiciones decimales para evitar errores de precisión.

6. El viaje más costoso corresponde al mayor costo final:

\[
CostoMax = max(CostoFinal_i)
\]

7. Si los datos no cumplen las condiciones establecidas, el sistema devuelve un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const viajes = [
  {
    destino: "París",
    costoBase: 1500,
    descuento: 10
  },
  {
    destino: "Tokio",
    costoBase: 2200,
    descuento: 15
  },
  {
    destino: "Roma",
    costoBase: 1200,
    descuento: 5
  }
];
```

Resultado esperado:

```javascript
{
  viajesCalculados: 3,
  costoTotal: 4540,
  promedioCosto: 1513.33,
  viajeMasCostoso: "Tokio",
  resultados: [
    {
      destino: "París",
      costoFinal: 1350
    },
    {
      destino: "Tokio",
      costoFinal: 1870
    },
    {
      destino: "Roma",
      costoFinal: 1140
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const viajes = [
  {
    destino: "Destino inválido",
    costoBase: 1000,
    descuento: 150
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "El costo debe ser positivo y el descuento debe estar entre 0 y 100."
}
```

## Explicacion final

La solución administra presupuestos de viajes aplicando cálculos porcentuales con control de precisión. Primero valida que los datos sean correctos para evitar descuentos inválidos o costos incorrectos.

Después calcula el valor real de cada viaje aplicando el descuento correspondiente y redondeando el resultado a dos decimales. Mediante un recorrido del arreglo se acumulan los costos, se obtiene un promedio y se encuentra el viaje con mayor precio final.

El algoritmo combina funciones, arreglos, ciclos, acumuladores y operaciones matemáticas para resolver un problema de redondeo y precisión aplicado al contexto turístico, generando resultados consistentes y verificables.