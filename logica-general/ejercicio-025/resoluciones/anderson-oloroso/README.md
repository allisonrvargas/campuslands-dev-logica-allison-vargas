# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con órdenes de reparación de un taller mecánico.
  - Cada reparación contiene:
    - `cliente`: persona que solicita el servicio.
    - `vehiculo`: vehículo a reparar.
    - `urgencia`: nivel de urgencia de 1 a 5.
    - `diasEspera`: cantidad de días esperando atención.
    - `costoEstimado`: costo aproximado de reparación.
    - `estado`: condición actual del vehículo.

- **Proceso:**
  - Validar que existan reparaciones registradas.
  - Revisar que los datos numéricos estén dentro de rangos válidos.
  - Calcular una puntuación de prioridad según:
    - Nivel de urgencia.
    - Tiempo de espera.
    - Estado crítico del vehículo.
  - Clasificar cada reparación en prioridad alta, media o baja.
  - Ordenar las reparaciones desde la mayor prioridad hasta la menor.

- **Salida:**
  - Un objeto con:
    - Cantidad de reparaciones organizadas.
    - Vehículo que debe recibir primera atención.
    - Lista ordenada de reparaciones según prioridad.

## Reglas identificadas

1. Debe existir al menos una reparación registrada.

2. Los valores válidos son:

\[
1 \le Urgencia \le 5
\]

\[
DiasEspera \ge 0
\]

\[
CostoEstimado \ge 0
\]

3. La puntuación de prioridad se calcula mediante:

\[
Puntuacion =
(Urgencia \times 10)
+
(DiasEspera \times 2)
+
(BonificacionCritica)
\]

Donde:

\[
BonificacionCritica =
\begin{cases}
20 & \text{si el estado es Crítico}\\
0 & \text{en otro caso}
\end{cases}
\]

4. La clasificación de prioridad depende de las condiciones:

- Estado **Crítico** y urgencia mayor o igual a 4:

  → "Alta"

- Urgencia mayor o igual a 3 o espera mayor o igual a 7 días:

  → "Media"

- Cualquier otro caso:

  → "Baja"

5. Las reparaciones deben ordenarse de mayor a menor puntuación.

6. Si los datos ingresados no son válidos, el sistema devuelve un error.

## Pruebas

### Caso normal

Entrada:

```javascript
const reparaciones = [
  {
    cliente: "Carlos",
    vehiculo: "Toyota Supra",
    urgencia: 5,
    diasEspera: 2,
    costoEstimado: 1200,
    estado: "Crítico"
  },
  {
    cliente: "Ana",
    vehiculo: "Mazda 3",
    urgencia: 3,
    diasEspera: 8,
    costoEstimado: 600,
    estado: "Normal"
  },
  {
    cliente: "Luis",
    vehiculo: "Honda Civic",
    urgencia: 1,
    diasEspera: 1,
    costoEstimado: 300,
    estado: "Normal"
  }
];
```

Resultado esperado:

```javascript
{
  reparacionesOrdenadas: 3,
  primeraAtencion: "Toyota Supra",
  listaPrioridad: [
    {
      cliente: "Carlos",
      vehiculo: "Toyota Supra",
      prioridad: "Alta",
      puntuacionPrioridad: 74,
      costoEstimado: 1200
    },
    {
      cliente: "Ana",
      vehiculo: "Mazda 3",
      prioridad: "Media",
      puntuacionPrioridad: 46,
      costoEstimado: 600
    },
    {
      cliente: "Luis",
      vehiculo: "Honda Civic",
      prioridad: "Baja",
      puntuacionPrioridad: 12,
      costoEstimado: 300
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const reparaciones = [
  {
    cliente: "Cliente inválido",
    vehiculo: "Vehículo desconocido",
    urgencia: 8,
    diasEspera: -2,
    costoEstimado: 500,
    estado: "Normal"
  }
];
```

Resultado esperado:

```javascript
{
  estado: "Error",
  motivo: "Los datos de reparación contienen valores inválidos."
}
```

## Explicacion final

La solución organiza las reparaciones de un taller mecánico utilizando un sistema de prioridades basado en reglas de negocio. Primero valida que los datos sean correctos para evitar errores en la clasificación.

Después asigna una puntuación a cada reparación considerando factores importantes como la urgencia, el tiempo de espera y si el vehículo se encuentra en estado crítico. Con esta puntuación se determina qué vehículos deben ser atendidos primero.

Finalmente, el algoritmo ordena las reparaciones de mayor a menor prioridad, permitiendo gestionar eficientemente los recursos del taller mediante ciclos, validaciones, acumulación de datos y comparaciones lógicas.