# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa el inventario de motos.
  - Cada moto contiene:
    - `modelo`: nombre del vehículo.
    - `marca`: fabricante.
    - `cilindrada`: capacidad del motor en centímetros cúbicos.
    - `precio`: valor comercial.
    - `disponible`: estado de disponibilidad.
  - Un objeto opcional de filtros:
    - `marca`.
    - `cilindradaMinima`.
    - `precioMaximo`.
    - `disponible`.

- **Proceso:**
  - Validar que exista un inventario con datos.
  - Aplicar filtros según las condiciones recibidas.
  - Comparar cada moto con los criterios establecidos.
  - Mantener únicamente las motos que cumplan todas las reglas.
  - Calcular el valor total de las motos filtradas.

- **Salida:**
  - Un objeto con:
    - Cantidad de motos encontradas.
    - Valor total del inventario filtrado.
    - Lista de motos que cumplen las condiciones.

## Reglas identificadas

1. El inventario debe contener al menos una moto.

2. Una moto permanece en el resultado si cumple todos los filtros enviados.

3. El filtro por marca funciona mediante comparación exacta:

\[
MarcaMoto = MarcaFiltro
\]

4. La cilindrada debe cumplir:

\[
Cilindrada \ge CilindradaMinima
\]

5. El precio debe cumplir:

\[
Precio \le PrecioMaximo
\]

6. La disponibilidad debe coincidir con el estado solicitado:

\[
DisponibleMoto = DisponibleFiltro
\]

7. El valor total filtrado se obtiene mediante:

\[
ValorTotal=\sum Precio_i
\]

8. Si no se reciben filtros, se devuelve todo el inventario válido.

## Pruebas

### Caso normal

Entrada:

```javascript
const motos = [
  {
    modelo: "Ninja ZX-10R",
    marca: "Kawasaki",
    cilindrada: 1000,
    precio: 18000,
    disponible: true
  },
  {
    modelo: "MT-07",
    marca: "Yamaha",
    cilindrada: 700,
    precio: 9000,
    disponible: true
  },
  {
    modelo: "Duke 390",
    marca: "KTM",
    cilindrada: 390,
    precio: 6500,
    disponible: false
  }
];

const filtros = {
  cilindradaMinima: 600,
  precioMaximo: 20000,
  disponible: true
};
```

Resultado esperado:

```javascript
{
  motosEncontradas: 2,
  valorTotalFiltrado: 27000,
  motos: [
    {
      modelo: "Ninja ZX-10R",
      marca: "Kawasaki",
      cilindrada: 1000,
      precio: 18000,
      disponible: true
    },
    {
      modelo: "MT-07",
      marca: "Yamaha",
      cilindrada: 700,
      precio: 9000,
      disponible: true
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const motos = [
  {
    modelo: "Moto inválida",
    marca: "Honda",
    cilindrada: 500,
    precio: 7000,
    disponible: true
  }
];

const filtros = {
  cilindradaMinima: 1000
};
```

Resultado esperado:

```javascript
{
  motosEncontradas: 0,
  valorTotalFiltrado: 0,
  motos: []
}
```

## Explicacion final

La solución implementa un sistema de filtros para un inventario de motos utilizando reglas de negocio. Primero valida que exista información disponible y posteriormente analiza cada motocicleta mediante diferentes condiciones.

El algoritmo utiliza filtros para comparar características como marca, cilindrada, precio y disponibilidad. Solo las motos que cumplen todas las condiciones pasan al resultado final.

Además, se calcula el valor acumulado del inventario filtrado mediante un acumulador. La solución combina arreglos, ciclos, condiciones lógicas y validaciones para construir un sistema flexible de búsqueda y clasificación de motocicletas.