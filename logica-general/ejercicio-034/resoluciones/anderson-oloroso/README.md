# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con solicitudes para realizar tatuajes.
  - Cada solicitud contiene:
    - `cliente`: nombre del cliente.
    - `edad`: edad del solicitante.
    - `tamano`: tamaño del tatuaje.
    - `presupuesto`: dinero disponible.
    - `consentimiento`: indica si existe consentimiento firmado.

- **Proceso:**
  - Validar que existan solicitudes registradas.
  - Verificar que los datos sean correctos.
  - Diagnosticar posibles errores o incumplimientos.
  - Aprobar únicamente las solicitudes que satisfacen todas las reglas.
  - Generar un reporte del estado de cada solicitud.

- **Salida:**
  - Un objeto con:
    - Cantidad de solicitudes analizadas.
    - Número de solicitudes aprobadas.
    - Diagnóstico individual de cada cliente.

## Reglas identificadas

1. Debe existir al menos una solicitud registrada.

2. Los datos válidos cumplen:

\[
Edad > 0
\]

\[
Tamano > 0
\]

\[
Presupuesto \ge 0
\]

Además, el consentimiento debe ser un valor booleano.

3. Si:

\[
Edad < 18
\]

la solicitud es rechazada.

4. Si no existe consentimiento firmado, la solicitud queda pendiente.

5. El presupuesto mínimo requerido se calcula como:

\[
Costo = Tamano \times 50
\]

6. Si:

\[
Presupuesto < Costo
\]

la solicitud queda pendiente por presupuesto insuficiente.

7. Una solicitud solo es aprobada cuando cumple todas las condiciones anteriores.

## Pruebas

### Caso normal

Entrada:

```javascript
const solicitudes = [
  {
    cliente: "Laura",
    edad: 25,
    tamano: 8,
    presupuesto: 600,
    consentimiento: true
  },
  {
    cliente: "Carlos",
    edad: 17,
    tamano: 5,
    presupuesto: 500,
    consentimiento: true
  },
  {
    cliente: "Andrea",
    edad: 28,
    tamano: 10,
    presupuesto: 300,
    consentimiento: true
  }
];
```

Resultado esperado:

```javascript
{
  solicitudesAnalizadas: 3,
  solicitudesValidas: 1,
  diagnosticos: [
    {
      cliente: "Laura",
      estado: "Aprobada",
      motivo: "La solicitud cumple todos los requisitos."
    },
    {
      cliente: "Carlos",
      estado: "Rechazada",
      motivo: "El cliente es menor de edad."
    },
    {
      cliente: "Andrea",
      estado: "Pendiente",
      motivo: "El presupuesto es insuficiente."
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const solicitudes = [
  {
    cliente: "",
    edad: -1,
    tamano: 0,
    presupuesto: -100,
    consentimiento: "Sí"
  }
];
```

Resultado esperado:

```javascript
{
  solicitudesAnalizadas: 1,
  solicitudesValidas: 0,
  diagnosticos: [
    {
      cliente: "",
      estado: "Error",
      motivo: "Datos incompletos o inválidos."
    }
  ]
}
```

## Explicacion final

La solución implementa un sistema de diagnóstico para solicitudes de tatuajes mediante una serie de validaciones y reglas de negocio. Cada solicitud es analizada individualmente para detectar errores en la información, verificar la mayoría de edad, confirmar la existencia del consentimiento informado y comprobar que el presupuesto sea suficiente para cubrir el costo estimado del tatuaje.

Gracias al uso de funciones, arreglos, ciclos y estructuras condicionales, el algoritmo clasifica automáticamente cada solicitud como **Aprobada**, **Pendiente**, **Rechazada** o **Error**, generando un reporte claro y verificable que facilita la toma de decisiones.