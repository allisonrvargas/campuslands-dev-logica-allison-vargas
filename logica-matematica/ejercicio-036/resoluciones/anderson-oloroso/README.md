# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con proyectos de animación 3D.
  - Cada proyecto contiene:
    - `nombre`: nombre del proyecto.
    - `presupuesto`: costo inicial estimado.
    - `calidad`: nivel de producción.
    - `tipo`: categoría del proyecto.

- **Proceso:**
  - Validar que los proyectos tengan información correcta.
  - Evaluar reglas de descuento según las características del proyecto.
  - Calcular el valor descontado.
  - Calcular el presupuesto final.
  - Acumular valores generales del presupuesto.

- **Salida:**
  - Cantidad de proyectos evaluados.
  - Presupuesto inicial total.
  - Ahorro generado por descuentos.
  - Presupuesto final.
  - Detalle individual de cada proyecto.

## Reglas identificadas

### 1. Validación de datos

Un proyecto es válido si cumple:

\[
Nombre \neq vacío
\]

\[
Presupuesto > 0
\]

\[
Calidad \neq vacío
\]

\[
Tipo \neq vacío
\]


### 2. Reglas de descuentos

#### Descuento por presupuesto alto

Si:

\[
Presupuesto \geq 10000
\]

Se aplica:

\[
10\%
\]


#### Descuento por calidad Premium

Si:

\[
Calidad = Premium
\]

Se aplica:

\[
5\%
\]


#### Descuento por proyecto educativo

Si:

\[
Tipo = Educativo
\]

Se aplica:

\[
3\%
\]


### 3. Límite máximo de descuento

El descuento acumulado no puede superar:

\[
20\%
\]


### 4. Cálculo final

Valor del descuento:

\[
Descuento =
Presupuesto \times \frac{Porcentaje}{100}
\]


Presupuesto final:

\[
PresupuestoFinal =
Presupuesto - Descuento
\]


## Pruebas

### Caso normal

Entrada:

```javascript
[
  {
    nombre: "Cortometraje Espacial",
    presupuesto: 15000,
    calidad: "Premium",
    tipo: "Comercial"
  },
  {
    nombre: "Video Educativo 3D",
    presupuesto: 5000,
    calidad: "Normal",
    tipo: "Educativo"
  }
]
```

Resultado esperado:

```javascript
{
  cantidadProyectos: 2,
  proyectos: [
    {
      nombre: "Cortometraje Espacial",
      presupuestoInicial: 15000,
      descuentoAplicado: "15%",
      presupuestoFinal: "12750.00"
    },
    {
      nombre: "Video Educativo 3D",
      presupuestoInicial: 5000,
      descuentoAplicado: "3%",
      presupuestoFinal: "4850.00"
    }
  ]
}
```


### Caso borde

Entrada:

```javascript
[
  {
    nombre: "Proyecto vacío",
    presupuesto: 0,
    calidad: "Premium",
    tipo: "Comercial"
  }
]
```

Resultado esperado:

```javascript
{
  nombre: "Proyecto vacío",
  estado: "Datos inválidos"
}
```


## Explicacion final

La solución representa un sistema de cálculo de presupuestos para proyectos de animación 3D. El programa recibe diferentes proyectos y aplica descuentos según reglas comerciales establecidas.

La lógica combina varias condiciones para determinar beneficios económicos, controla límites máximos de descuento y genera un resumen financiero completo.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y operaciones matemáticas para resolver un problema de simulación con reglas de negocio.