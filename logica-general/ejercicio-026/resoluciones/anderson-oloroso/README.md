# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información de autos hiperdeportivos.
  - Cada vehículo contiene:
    - `modelo`: nombre del automóvil.
    - `marca`: fabricante.
    - `velocidadMaxima`: velocidad máxima alcanzada.
    - `potencia`: potencia del motor.
    - `precio`: valor comercial del vehículo.
  - Un objeto opcional de filtros:
    - `marca`.
    - `velocidadMinima`.
    - `potenciaMinima`.
    - `precioMaximo`.

- **Proceso:**
  - Validar que exista un inventario de vehículos.
  - Revisar que los valores numéricos sean correctos.
  - Recorrer cada automóvil del arreglo.
  - Comparar sus características con los filtros recibidos.
  - Guardar únicamente los vehículos que cumplan todas las condiciones.

- **Salida:**
  - Un objeto con:
    - Cantidad de autos encontrados.
    - Lista de autos que cumplen los criterios de búsqueda.

## Reglas identificadas

1. Debe existir al menos un automóvil registrado.

2. Los valores del vehículo deben ser positivos:

\[
VelocidadMaxima > 0
\]

\[
Potencia > 0
\]

\[
Precio > 0
\]

3. Si se proporciona una marca, el vehículo debe coincidir exactamente:

\[
MarcaAuto = MarcaFiltro
\]

4. La velocidad debe cumplir:

\[
VelocidadMaxima \ge VelocidadMinima
\]

5. La potencia debe cumplir:

\[
Potencia \ge PotenciaMinima
\]

6. El precio debe cumplir:

\[
Precio \le PrecioMaximo
\]

7. Un automóvil solo aparece en el resultado si cumple todas las condiciones ingresadas.

8. Si la información del inventario es incorrecta, el sistema devuelve un mensaje de error.

## Pruebas

### Caso normal

Entrada:

```javascript
const autos = [
  {
    modelo: "Bugatti Chiron Super Sport",
    marca: "Bugatti",
    velocidadMaxima: 490,
    potencia: 1600,
    precio: 3900000
  },
  {
    modelo: "Ferrari SF90 Stradale",
    marca: "Ferrari",
    velocidadMaxima: 340,
    potencia: 986,
    precio: 625000
  },
  {
    modelo: "Lamborghini Aventador SVJ",
    marca: "Lamborghini",
    velocidadMaxima: 350,
    potencia: 770,
    precio: 520000
  }
];

const filtros = {
  velocidadMinima: 350,
  potenciaMinima: 1000
};
```

Resultado esperado:

```javascript
{
  autosEncontrados: 1,
  autos: [
    {
      modelo: "Bugatti Chiron Super Sport",
      marca: "Bugatti",
      velocidadMaxima: 490,
      potencia: 1600,
      precio: 3900000
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const autos = [
  {
    modelo: "Auto inválido",
    marca: "Marca desconocida",
    velocidadMaxima: 0,
    potencia: -500,
    precio: 100000
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los datos del vehículo Auto inválido no son válidos."
}
```

## Explicacion final

La solución implementa un buscador de autos hiperdeportivos basado en filtros y reglas de negocio. Primero valida que los vehículos tengan información correcta y después analiza cada automóvil individualmente.

Mediante condiciones lógicas se comparan características como marca, velocidad máxima, potencia y precio. Solo los vehículos que cumplen todos los requisitos establecidos son agregados al resultado final.

El algoritmo utiliza funciones, arreglos, ciclos y estructuras condicionales para crear un sistema de búsqueda flexible que permite encontrar vehículos según diferentes criterios de rendimiento y características técnicas.