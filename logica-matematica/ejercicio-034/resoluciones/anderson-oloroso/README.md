# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con diseños de tatuajes.
  - Cada diseño contiene:
    - `cliente`: nombre del cliente.
    - `forma`: figura geométrica del tatuaje.
    - `medida1`: primera dimensión necesaria para calcular.
    - `medida2`: segunda dimensión cuando la figura la requiere.

- **Proceso:**
  - Validar que existan diseños registrados.
  - Revisar que las medidas sean válidas.
  - Identificar la forma geométrica del tatuaje.
  - Calcular área y perímetro según la figura.
  - Acumular los valores obtenidos.
  - Generar un reporte individual.

- **Salida:**
  - Un objeto con:
    - Cantidad de diseños procesados.
    - Área total de todos los tatuajes.
    - Perímetro total acumulado.
    - Información detallada de cada diseño.

## Reglas identificadas

1. Debe existir al menos un diseño de tatuaje para realizar cálculos.

2. Las medidas deben cumplir:

\[
Medida1 > 0
\]

\[
Medida2 > 0
\]

3. Para un tatuaje rectangular:

Área:

\[
A = Base \times Altura
\]

Perímetro:

\[
P = 2(Base + Altura)
\]

4. Para un tatuaje circular:

Área:

\[
A = \pi r^2
\]

Perímetro:

\[
P = 2\pi r
\]

5. Solo se permiten las figuras:

- Rectángulo.
- Círculo.

6. Los diseños con datos inválidos o formas no soportadas no participan en los cálculos acumulados.

## Pruebas

### Caso normal

Entrada:

```javascript
const tatuajes = [
  {
    cliente: "Laura",
    forma: "rectangulo",
    medida1: 10,
    medida2: 5
  },
  {
    cliente: "Carlos",
    forma: "circulo",
    medida1: 4,
    medida2: 4
  }
];
```

Resultado esperado:

```javascript
{
  cantidadDiseños: 2,
  areaTotal: 100.27,
  perimetroTotal: 75.13,
  resultados: [
    {
      cliente: "Laura",
      forma: "rectangulo",
      area: 50,
      perimetro: 30
    },
    {
      cliente: "Carlos",
      forma: "circulo",
      area: 50.27,
      perimetro: 25.13
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const tatuajes = [
  {
    cliente: "Pedro",
    forma: "triangulo",
    medida1: 10,
    medida2: 5
  }
];
```

Resultado esperado:

```javascript
{
  cantidadDiseños: 1,
  areaTotal: 0,
  perimetroTotal: 0,
  resultados: [
    {
      cliente: "Pedro",
      estado: "Forma no soportada"
    }
  ]
}
```

## Explicacion final

La solución modela un sistema para calcular las dimensiones de diseños de tatuajes utilizando conceptos geométricos de áreas y perímetros. Cada diseño es evaluado según su forma y sus medidas para aplicar la fórmula correspondiente.

El programa permite procesar múltiples tatuajes, acumular sus valores totales y detectar errores en los datos ingresados. Utiliza funciones, arreglos, ciclos, acumuladores y condicionales para construir una solución organizada y reutilizable.

Este enfoque permite automatizar cálculos que podrían utilizarse en un estudio de tatuajes para estimar el tamaño del diseño y planificar recursos necesarios para cada trabajo.