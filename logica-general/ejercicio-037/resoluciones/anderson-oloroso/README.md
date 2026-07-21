# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con proyectos de arquitectura 3D.
  - Cada proyecto contiene:
    - `nombre`: identificación del proyecto.
    - `presupuesto`: presupuesto disponible.
    - `complejidad`: nivel de dificultad (`Alta`, `Media` o `Baja`).
    - `renderizado`: indica si el modelo 3D fue renderizado correctamente.

- **Proceso:**
  - Validar la información de cada proyecto.
  - Aplicar una tabla de decisión basada en varias condiciones.
  - Clasificar cada proyecto como **Aprobado**, **Revisión** o **Rechazado**.
  - Contabilizar la cantidad de proyectos en cada categoría.
  - Generar un reporte final.

- **Salida:**
  - Un objeto con:
    - Número de proyectos evaluados.
    - Cantidad de proyectos aprobados.
    - Cantidad de proyectos en revisión.
    - Cantidad de proyectos rechazados.
    - Resultado individual de cada proyecto.

## Reglas identificadas

1. Todo proyecto debe tener un presupuesto mayor que cero.

2. La complejidad únicamente puede tomar uno de los siguientes valores:

- Alta
- Media
- Baja

3. Un proyecto será **Aprobado** cuando cumpla simultáneamente:

- Presupuesto ≥ 50,000.
- El renderizado sea correcto.
- La complejidad no sea **Alta**.

4. Un proyecto será enviado a **Revisión** cuando:

- Presupuesto ≥ 30,000.
- El renderizado sea correcto.
- No cumpla las condiciones para aprobación.

5. Todo proyecto que no cumpla las reglas anteriores será **Rechazado**.

6. Los proyectos con información inválida no participan en las estadísticas.

## Pruebas

### Caso normal

Entrada:

```javascript
const proyectos = [
  {
    nombre: "Edificio Alfa",
    presupuesto: 60000,
    complejidad: "Media",
    renderizado: true
  },
  {
    nombre: "Casa Beta",
    presupuesto: 35000,
    complejidad: "Alta",
    renderizado: true
  },
  {
    nombre: "Parque Gamma",
    presupuesto: 18000,
    complejidad: "Baja",
    renderizado: false
  }
];
```

Resultado esperado:

```javascript
{
  proyectosEvaluados: 3,
  aprobados: 1,
  revision: 1,
  rechazados: 1,
  resultados: [
    {
      nombre: "Edificio Alfa",
      decision: "Aprobado"
    },
    {
      nombre: "Casa Beta",
      decision: "Revisión"
    },
    {
      nombre: "Parque Gamma",
      decision: "Rechazado"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const proyectos = [
  {
    nombre: "Proyecto X",
    presupuesto: -5000,
    complejidad: "Muy Alta",
    renderizado: true
  }
];
```

Resultado esperado:

```javascript
{
  proyectosEvaluados: 1,
  aprobados: 0,
  revision: 0,
  rechazados: 0,
  resultados: [
    {
      nombre: "Proyecto X",
      decision: "Datos inválidos"
    }
  ]
}
```

## Explicacion final

La solución implementa una **tabla de decisión**, una técnica utilizada en sistemas de negocio para evaluar múltiples condiciones de manera organizada. Cada proyecto de arquitectura 3D es analizado considerando simultáneamente su presupuesto, nivel de complejidad y estado del renderizado.

Dependiendo de la combinación de estos criterios, el algoritmo determina si el proyecto puede aprobarse, requiere revisión adicional o debe rechazarse. Además, controla casos con datos inválidos y genera estadísticas generales del proceso.

La implementación emplea funciones, arreglos, ciclos, acumuladores y estructuras condicionales para construir una solución clara, reutilizable y fácil de validar mediante diferentes casos de prueba.