# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información de motos almacenadas en un inventario.
  - Cada moto contiene:
    - `nombre`: nombre del modelo.
    - `marca`: fabricante de la motocicleta.
    - `cilindrada`: capacidad del motor en centímetros cúbicos.
    - `precio`: valor comercial de la moto.
    - `disponible`: indica si la moto está disponible para venta.

  - Un objeto opcional de filtros:
    - `marca`: permite buscar una marca específica.
    - `cilindradaMinima`: establece el límite inferior de cilindrada.
    - `precioMaximo`: establece el valor máximo permitido.
    - `disponible`: filtra motos disponibles o no disponibles.

- **Proceso:**
  - Validar que exista un inventario de motos.
  - Recorrer cada moto registrada.
  - Aplicar filtros según las condiciones recibidas.
  - Mantener únicamente las motos que cumplan todos los criterios.
  - Generar un resultado con las motos encontradas.

- **Salida:**
  - Un objeto que contiene:
    - Cantidad de motos encontradas.
    - Lista de motos que cumplen las condiciones de búsqueda.

## Reglas identificadas

1. El inventario debe contener motos registradas para poder realizar una búsqueda.

2. Cada moto debe tener información básica válida:

\[
Nombre \neq vacío
\]

\[
Marca \neq vacío
\]

3. Si se especifica una marca, solamente se aceptan motos donde:

\[
Moto.Marca = Filtro.Marca
\]

4. Si se define una cilindrada mínima:

\[
Moto.Cilindrada \geq CilindradaMinima
\]

5. Si se define un precio máximo:

\[
Moto.Precio \leq PrecioMaximo
\]

6. Si se define disponibilidad, debe coincidir exactamente:

\[
Moto.Disponible = Filtro.Disponible
\]

7. Una moto solamente aparece en el resultado si cumple todas las condiciones aplicadas.

## Pruebas

### Caso normal

Entrada:

```javascript
const inventario = [
  {
    nombre: "Ducati Panigale V4",
    marca: "Ducati",
    cilindrada: 1103,
    precio: 30000,
    disponible: true
  },
  {
    nombre: "Yamaha R1",
    marca: "Yamaha",
    cilindrada: 998,
    precio: 20000,
    disponible: true
  },
  {
    nombre: "Honda CB500",
    marca: "Honda",
    cilindrada: 471,
    precio: 9000,
    disponible: false
  }
];

Filtro:

{
  cilindradaMinima: 900,
  precioMaximo: 25000,
  disponible: true
}
```

Resultado esperado:

```javascript
{
  motosEncontradas: 1,
  motos: [
    {
      nombre: "Yamaha R1",
      marca: "Yamaha",
      cilindrada: 998,
      precio: 20000,
      disponible: true
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const inventario = [
  {
    nombre: "Moto Económica",
    marca: "Suzuki",
    cilindrada: 150,
    precio: 5000,
    disponible: false
  }
];

Filtro:

{
  marca: "BMW",
  disponible: true
}
```

Resultado esperado:

```javascript
{
  motosEncontradas: 0,
  motos: []
}
```

## Explicacion final

La solución implementa un sistema de búsqueda y filtrado para un inventario de motos. El algoritmo recibe una lista de motocicletas y aplica diferentes condiciones de selección según los criterios proporcionados.

Cada filtro funciona como una regla independiente: marca, cilindrada, precio y disponibilidad. Una moto solo permanece en el resultado cuando cumple todas las restricciones establecidas.

La implementación utiliza funciones, arreglos, métodos de filtrado y condiciones lógicas para construir una solución flexible que permite realizar búsquedas personalizadas dentro del inventario.