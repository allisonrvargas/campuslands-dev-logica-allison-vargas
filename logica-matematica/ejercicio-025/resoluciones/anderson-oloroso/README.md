# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) que representa los servicios realizados en un taller mecánico.
  - Cada servicio contiene:
    - `nombre`: nombre del servicio.
    - `costo`: precio del servicio.
    - `tiempoHoras`: tiempo estimado de ejecución en horas.

- **Proceso:**
  - Validar que exista al menos un servicio registrado.
  - Verificar que los costos y tiempos sean mayores que cero.
  - Recorrer todos los servicios utilizando un ciclo.
  - Acumular el costo total de los servicios.
  - Identificar el servicio con el menor costo.
  - Clasificar cada servicio según el tiempo requerido.

- **Salida:**
  - Un objeto con:
    - Cantidad de servicios evaluados.
    - Costo total.
    - Servicio más económico.
    - Costo mínimo encontrado.
    - Resumen de clasificación de cada servicio.

## Reglas identificadas

1. Debe existir al menos un servicio registrado.
2. El costo y el tiempo de cada servicio deben ser mayores que cero.
3. El costo total del taller se obtiene mediante:

\[
Costo\ Total=\sum Costo_i
\]

4. El servicio más económico corresponde al menor costo registrado:

\[
Costo_{min}=min(Costo_i)
\]

5. La clasificación depende del tiempo de ejecución:
   - **Hasta 2 horas** → **Servicio rápido**.
   - **Más de 2 y hasta 5 horas** → **Servicio estándar**.
   - **Más de 5 horas** → **Servicio prolongado**.

6. Si algún dato no cumple los límites establecidos, el sistema devuelve un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const servicios = [
  {
    nombre: "Cambio de aceite",
    costo: 45,
    tiempoHoras: 1
  },
  {
    nombre: "Cambio de embrague",
    costo: 320,
    tiempoHoras: 6
  },
  {
    nombre: "Alineación",
    costo: 80,
    tiempoHoras: 2
  }
];
```

Resultado esperado:

```javascript
{
  serviciosEvaluados: 3,
  costoTotal: 445,
  servicioMasEconomico: "Cambio de aceite",
  costoMinimo: 45,
  detalleServicios: [
    {
      nombre: "Cambio de aceite",
      costo: 45,
      tiempoHoras: 1,
      estado: "Servicio rápido"
    },
    {
      nombre: "Cambio de embrague",
      costo: 320,
      tiempoHoras: 6,
      estado: "Servicio prolongado"
    },
    {
      nombre: "Alineación",
      costo: 80,
      tiempoHoras: 2,
      estado: "Servicio rápido"
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const servicios = [
  {
    nombre: "Revisión general",
    costo: 0,
    tiempoHoras: 3
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "El costo y el tiempo del servicio deben ser mayores que cero."
}
```

## Explicacion final

La solución analiza los servicios de un taller mecánico utilizando operaciones de mínimos y validación de límites. Primero verifica que todos los datos sean válidos para garantizar que los cálculos puedan realizarse correctamente.

Durante un único recorrido del arreglo, el algoritmo acumula el costo total, identifica el servicio con el menor precio y clasifica cada servicio según el tiempo necesario para completarlo. Esto permite obtener varias estadísticas sin realizar recorridos adicionales.

Finalmente, se genera un resumen con el costo total del taller, el servicio más económico y la clasificación de cada servicio. La solución integra ciclos, acumuladores, comparaciones de mínimos y estructuras condicionales para producir un resultado claro y verificable.