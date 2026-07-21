# Plantilla de solucion

## Analisis

- **Entrada:**
  - Un arreglo (`Array<Object>`) con información de los saltos.
  - Cada registro contiene:
    - `participante`: nombre del paracaidista.
    - `altura`: altura del salto en metros.
    - `viento`: velocidad del viento en km/h.
    - `paracaidas`: indica si el equipo está disponible.

- **Proceso:**
  - Validar que existan registros de saltos.
  - Comprobar que los datos sean válidos.
  - Evaluar las condiciones de seguridad.
  - Clasificar cada caso como aprobado, reprogramado o cancelado.
  - Contabilizar los saltos aprobados.

- **Salida:**
  - Un objeto con:
    - Cantidad de saltos analizados.
    - Número de saltos aprobados.
    - Resultado individual de cada participante.

## Reglas identificadas

1. Debe existir al menos un salto registrado.

2. Los datos válidos cumplen:

\[
Altura > 0
\]

\[
Viento \ge 0
\]

El paracaídas debe estar definido como un valor booleano.

3. Si no existe paracaídas disponible:

→ **Cancelado**

4. Si la velocidad del viento supera:

\[
Viento > 40
\]

→ **Cancelado**

5. Si la altura es menor que:

\[
Altura < 800
\]

→ **Reprogramado**

6. Un salto será aprobado únicamente cuando:

- Existe paracaídas.
- El viento no supera los 40 km/h.
- La altura es igual o superior a 800 metros.

7. Cada salto se analiza de forma independiente.

## Pruebas

### Caso normal

Entrada:

```javascript
const saltos = [
  {
    participante: "María",
    altura: 3500,
    viento: 18,
    paracaidas: true
  },
  {
    participante: "Carlos",
    altura: 600,
    viento: 15,
    paracaidas: true
  },
  {
    participante: "Andrea",
    altura: 3200,
    viento: 45,
    paracaidas: true
  }
];
```

Resultado esperado:

```javascript
{
  saltosAnalizados: 3,
  saltosSeguros: 1,
  resultados: [
    {
      participante: "María",
      decision: "Aprobado",
      motivo: "El salto cumple todas las condiciones de seguridad."
    },
    {
      participante: "Carlos",
      decision: "Reprogramado",
      motivo: "La altura es insuficiente para un salto seguro."
    },
    {
      participante: "Andrea",
      decision: "Cancelado",
      motivo: "Velocidad del viento demasiado alta."
    }
  ]
}
```

### Caso borde

Entrada:

```javascript
const saltos = [
  {
    participante: "Luis",
    altura: 2500,
    viento: 20,
    paracaidas: false
  }
];
```

Resultado esperado:

```javascript
{
  saltosAnalizados: 1,
  saltosSeguros: 0,
  resultados: [
    {
      participante: "Luis",
      decision: "Cancelado",
      motivo: "No hay paracaídas disponible."
    }
  ]
}
```

## Explicacion final

La solución simula la resolución de distintos casos de paracaidismo aplicando reglas de seguridad sobre cada participante. Para cada registro se verifica que los datos sean correctos y posteriormente se evalúan condiciones como la disponibilidad del paracaídas, la velocidad del viento y la altura del salto.

Dependiendo de estas condiciones, el sistema clasifica el salto como **Aprobado**, **Reprogramado** o **Cancelado**, generando un reporte detallado para cada participante. El algoritmo utiliza funciones, arreglos, ciclos, acumuladores y estructuras condicionales para resolver múltiples casos de forma ordenada y consistente.