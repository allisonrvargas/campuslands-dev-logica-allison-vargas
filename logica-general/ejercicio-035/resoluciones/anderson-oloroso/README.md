# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con proyectos de dibujo digital.
  - Cada proyecto contiene:
    - `artista`: nombre del diseñador.
    - `capas`: número de capas del archivo.
    - `resolucion`: resolución del proyecto en dpi.
    - `formato`: formato del archivo.
    - `licencia`: indica si posee licencia de uso.

- **Proceso:**
  - Validar que existan proyectos registrados.
  - Comprobar que la información sea válida.
  - Aplicar las reglas de negocio establecidas.
  - Clasificar cada proyecto como aprobado, rechazado o requiere corrección.
  - Contabilizar los proyectos aprobados.

- **Salida:**
  - Un objeto con:
    - Total de proyectos analizados.
    - Cantidad de proyectos aprobados.
    - Resultado individual de cada proyecto.

## Reglas identificadas

1. Debe existir al menos un proyecto registrado.

2. Los datos válidos cumplen:

\[
Capas > 0
\]

\[
Resolucion > 0
\]

El formato no puede estar vacío y la licencia debe ser un valor booleano.

3. Si el proyecto no posee licencia:

→ **Rechazado**

4. La resolución mínima aceptada es:

\[
Resolucion \ge 300\ dpi
\]

5. Los únicos formatos permitidos son:

- PNG
- PSD

6. El proyecto debe contener como mínimo:

\[
Capas \ge 5
\]

7. Solo los proyectos que cumplen todas las reglas anteriores son aprobados.

## Pruebas

### Caso normal

Entrada:

```javascript
const proyectos = [
  {
    artista: "Laura",
    capas: 8,
    resolucion: 300,
    formato: "PSD",
    licencia: true
  },
  {
    artista: "Carlos",
    capas: 3,
    resolucion: 300,
    formato: "PNG",
    licencia: true
  },
  {
    artista: "Andrea",
    capas: 10,
    resolucion: 150,
    formato: "JPG",
    licencia: true
  }
];
```

Resultado esperado:

```javascript
{
  proyectosAnalizados: 3,
  proyectosAprobados: 1,
  resultados: [
    {
      artista: "Laura",
      estado: "Aprobado",
      motivo: "El proyecto cumple todas las reglas de negocio."
    },
    {
      artista: "Carlos",
      estado: "Corrección",
      motivo: "El proyecto debe contener al menos 5 capas."
    },
    {
      artista: "Andrea",
      estado: "Corrección",
      motivo: "La resolución mínima requerida es de 300 dpi."
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const proyectos = [
  {
    artista: "Miguel",
    capas: 7,
    resolucion: 350,
    formato: "PSD",
    licencia: false
  }
];
```

Resultado esperado:

```javascript
{
  proyectosAnalizados: 1,
  proyectosAprobados: 0,
  resultados: [
    {
      artista: "Miguel",
      estado: "Rechazado",
      motivo: "El proyecto no posee licencia de uso."
    }
  ]
}
```

## Explicacion final

La solución implementa un sistema de validación de proyectos de dibujo digital aplicando reglas de negocio comunes en procesos de entrega de ilustraciones. Cada proyecto es analizado verificando la existencia de una licencia válida, la resolución mínima requerida, el formato permitido y el número mínimo de capas.

Mediante funciones, arreglos, ciclos, acumuladores y estructuras condicionales, el algoritmo clasifica automáticamente cada proyecto como **Aprobado**, **Corrección** o **Rechazado**, permitiendo identificar rápidamente cuáles cumplen los requisitos establecidos y cuáles necesitan ajustes antes de su aceptación.