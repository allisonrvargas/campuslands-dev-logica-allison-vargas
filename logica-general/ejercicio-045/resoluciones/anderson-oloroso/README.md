# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con órdenes de trabajo de un taller mecánico.
  - Cada trabajo contiene:
    - `cliente`: persona que solicita el servicio.
    - `vehiculo`: vehículo asociado al mantenimiento.
    - `tipoServicio`: reparación o mantenimiento requerido.
    - `prioridad`: nivel de atención requerido.
    - `tiempoEspera`: tiempo que lleva esperando el cliente.

- **Proceso:**
  - Validar que existan trabajos registrados.
  - Verificar que cada trabajo tenga información completa.
  - Asignar un valor numérico a cada nivel de prioridad.
  - Ordenar los trabajos según importancia.
  - Si dos trabajos tienen la misma prioridad, atender primero el que tenga mayor tiempo esperando.
  - Contabilizar la cantidad de trabajos por prioridad.

- **Salida:**
  - Un objeto con:
    - Total de trabajos organizados.
    - Resumen de prioridades.
    - Lista ordenada de atención.

## Reglas identificadas

### 1. Validación de datos

Un trabajo es válido si contiene:

\[
Cliente \neq vacío
\]

\[
Vehiculo \neq vacío
\]

\[
TipoServicio \neq vacío
\]

\[
Prioridad \in \{Urgente, Alta, Normal\}
\]


### 2. Valor de prioridad

Se asignan valores para comparar niveles:

| Prioridad | Valor |
|---|---:|
| Urgente | 3 |
| Alta | 2 |
| Normal | 1 |


### 3. Orden principal de atención

Los trabajos se organizan de mayor a menor prioridad:

\[
Urgente > Alta > Normal
\]


### 4. Regla secundaria

Si dos trabajos tienen la misma prioridad:

\[
Menor\ tiempo\ de\ espera \rightarrow Mayor\ prioridad\ de\ orden
\]

El sistema organiza por:

1. Nivel de prioridad.
2. Tiempo de espera registrado.


## Pruebas

### Caso normal

Entrada:

```javascript
[
  {
    cliente: "Carlos",
    vehiculo: "Toyota Corolla",
    tipoServicio: "Cambio de motor",
    prioridad: "Urgente",
    tiempoEspera: 5
  },
  {
    cliente: "Ana",
    vehiculo: "Mazda 3",
    tipoServicio: "Cambio de aceite",
    prioridad: "Normal",
    tiempoEspera: 30
  },
  {
    cliente: "Luis",
    vehiculo: "BMW Serie 3",
    tipoServicio: "Revisión eléctrica",
    prioridad: "Alta",
    tiempoEspera: 15
  }
]
```

Resultado esperado:

```javascript
{
  totalTrabajos: 3,
  resumenPrioridades: {
    urgentes: 1,
    altas: 1,
    normales: 1
  },
  ordenAtencion: [
    {
      prioridad: "Urgente"
    },
    {
      prioridad: "Alta"
    },
    {
      prioridad: "Normal"
    }
  ]
}
```


### Caso borde

Entrada:

```javascript
[
  {
    cliente: "",
    vehiculo: "Ford Focus",
    tipoServicio: "Frenos",
    prioridad: "Alta",
    tiempoEspera: 20
  }
]
```

Resultado esperado:

```javascript
{
  totalTrabajos: 0,
  resumenPrioridades: {
    urgentes: 0,
    altas: 0,
    normales: 0
  },
  ordenAtencion: []
}
```


## Explicacion final

La solución representa un sistema de gestión de prioridades para un taller mecánico. El programa analiza cada solicitud de servicio y determina el orden correcto de atención según reglas de negocio.

La prioridad del problema define la importancia del trabajo, mientras que el tiempo de espera permite resolver empates entre servicios con la misma urgencia.

La implementación utiliza funciones, arreglos, ciclos, acumuladores y ordenamiento lógico para construir un sistema organizado y verificable.